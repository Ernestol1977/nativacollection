import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Forms from "../Form/Form";

import "./Cart.css";

const Cart = () => {
  const { cartList, vaciarCarrito, totalPrice, removeItem } = useCartContext();

  return cartList.length ? (
    <div className="cartView">
      <div className="cartDiv">
        {cartList.map((product) => (
          <div key={product.id} className="liItem">
            <li>
              <img src={product.photo} alt="" />
              <p>{product.name}</p>
              <p>Precio: {product.price*product.quantity}</p>
              <p>Cantidad: {product.quantity}</p>
            </li>
            <button
              className="btnRemove"
              onClick={() => removeItem(product.id)}
            >
              X
            </button>
          </div>
        ))}

        <h3 className="precioTotal">
          El precio total es de: ${totalPrice() !== 0 && totalPrice()}{" "}
        </h3>

        <button onClick={vaciarCarrito} className="vaciarCarrito">
          Vaciar Carrito
        </button>
      </div>
      <div className="divForm">
        <Forms />
      </div>
    </div>
  ) : (
    <div>
      <h2>Sin productos en su carrito</h2>
      <Link className="buttonReturn" to="./tienda">
        <span>VOLVER</span>
      </Link>
    </div>
  );
};

export default Cart;
