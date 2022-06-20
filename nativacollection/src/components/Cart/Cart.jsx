import { useCartContext } from "../../context/CartContext"
import { IoIosCloseCircle } from "react-icons/io"
import { Link } from "react-router-dom"
import Forms from "../Form/Form"

import "./Cart.css"


const Cart = () => {
  const { cartList, vaciarCarrito, totalPrice, removeItem } = useCartContext()

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
        <Forms />
      </div>
    )
    :
    (
      <div>
        <h2>Sin productos en su carrito</h2>
        <Link className="buttonReturn" to="./tienda">
          <span>VOLVER</span>
        </Link>
      </div>
    )
  )
}


export default Cart