import { useCartContext } from "../../context/CartContext"
import { IoIosCloseCircle } from "react-icons/io" 


const Cart = () => {
    const {cartList, vaciarCarrito, totalPrice, removeItem} = useCartContext()

  return (
    cartList.length?(
    <div>
      {cartList.map(product => <div key={product.id}>
          <li>
            {product.name} - Precio: {product.price} - Cantidad: {product.quantity}
          </li>
          <button className="btn btn-outline-danger" onClick={() => removeItem(product.id)}><IoIosCloseCircle/></button>
        </div>)}
      <h3>El precio total es de: ${totalPrice() !== 0 && totalPrice()} </h3>

      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
    )
    :
    (
      <h2>Sin productos en su carrito</h2>
    )
  )
}

export default Cart