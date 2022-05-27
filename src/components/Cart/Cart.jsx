import { useCartContext } from "../../context/CartContext"

const Cart = () => {
    const {cartList, vaciarCarrito, totalPrice, removeItem} = useCartContext()

  return (
    <div>
      {cartList.map(product => <div key={product.id}>
          <li>
            {product.name} - Precio: {product.price} - Cantidad: {product.quantity}
          </li>
          <button className="btn btn-outline-danger" onClick={() => removeItem(product.id)}> X </button>
        </div>)}
      <h3>El precio total es de: ${totalPrice() !== 0 && totalPrice()} </h3>

      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart