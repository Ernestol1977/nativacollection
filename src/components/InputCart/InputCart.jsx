import { Link } from "react-router-dom";
import "./InputCart.css";

const InputCart = () => {
  return (
    <>
      <Link to="/cart">
        <button
          className="btnCarrito"
          onClick={() => console.log("ir a carrito")}
        >
          Ir al carrito
        </button>
      </Link>

      <Link to="/">
        <button
          className="btnComprar"
          onClick={() => console.log("seguir comprando")}
        >
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

export default InputCart;
