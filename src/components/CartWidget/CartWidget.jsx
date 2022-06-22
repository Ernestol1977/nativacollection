import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import logo from "../img/cartWidget.svg";
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useCartContext();

  return (
    <>
      <Link to="/cart" className="widget">
        {cantidadTotal() !== 0 && cantidadTotal()}
        <img src={logo} alt="imagen" />
      </Link>
    </>
  );
};

export default CartWidget;
