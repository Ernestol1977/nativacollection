import { Link } from "react-router-dom";
import "./Item.css";

function Item({ name, id, photo, price, stock }) {

  return (
    <div>
      <Link to={`/detalle/${id}`} className="itemAll">
        <img className="itemImg" src={photo} alt="" />
        <div className="itemInfo">
          <h3 className="itemTitle">{name}</h3>
          <p className="itemPrice">{`Precio: $${price}`}</p>
          <p className="itemStock">{`Quedan ${stock}`}</p>
        </div>
      </Link>
     
      <Link to={`/detalle/${id}`}>
        <button className="btn btn-outline-primary btn-block">Detalle del Producto</button>
      </Link>
    </div>
  );
}

export default Item;
