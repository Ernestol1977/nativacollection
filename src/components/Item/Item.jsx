import { Link } from "react-router-dom";
import "./Item.css";

function Item({ name, id, photo, price, stock }) {
  return (
    <div className="item">
      <Link to={`/detalle/${id}`} className="itemAll">
        <img className="itemImg" src={photo} alt="" />
        <h3 className="itemTitle">{name}</h3>
        <div className="itemInfo">
          <p className="itemPrice">{`Precio: $${price}`}</p>
          <p className="itemStock">{`Quedan ${stock}`}</p>
        </div>
      </Link>

      <Link to={`/detalle/${id}`} className="btn">
        <button>Detalle del Producto</button>
      </Link>
    </div>
  );
}

export default Item;
