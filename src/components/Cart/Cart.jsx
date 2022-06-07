import { useCartContext } from "../../context/CartContext"
import { IoIosCloseCircle } from "react-icons/io"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"


const Cart = () => {
  const { cartList, vaciarCarrito, totalPrice, removeItem } = useCartContext()

  async function createOrder() {
    let order = {}

    order.bruyer = { name: 'Ernesto', email: 'erne@gmail.com', phone: '5456464654' }
    order.Total = totalPrice()

    order.Products = cartList.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.name
      const price = cartItem.price * cartItem.quantity

      return { id, name, price }
    })


    const db = getFirestore()
    const queryCollection = collection(db, 'Orders')
    addDoc(queryCollection, order)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())

      
    //modificar Stock
    const queryCollectionStock = collection(db, 'Items')

    const queryUpdateStock = await query(
      queryCollectionStock,
      where(documentId(), 'in', cartList.map(it => it.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
      })))
      .finally(() => console.log('actualizado'))

    batch.commit()
  }

  return (
    cartList.length ? (
      <div>
        {cartList.map(product => <div key={product.id}>
          <li>
            <img src={product.photo} alt="" />
            {product.name} - Precio: {product.price} - Cantidad: {product.quantity}
          </li>
          <button className="btn btn-outline-danger" onClick={() => removeItem(product.id)}><IoIosCloseCircle /></button>
        </div>)}
        <h3>El precio total es de: ${totalPrice() !== 0 && totalPrice()} </h3>

        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <button onClick={createOrder}>Generar Compra</button>
      </div>
    )
      :
      (
        <div>
          <h2>Sin productos en su carrito</h2>
          <Link className="buttonVolver" to="./tienda">
            <span>VOLVER</span>
          </Link>
        </div>
      )
  )
}

export default Cart