import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
// import "./Item.css";

function Item({ name, id, img, price, stock }) {
  function cart(count) {
    alert(`${count} items agregados al carrito`);
  }

  console.log(name)
  return (
    <div className="item">
      <Link to={`/detalle/${id}`}>
        <img className="itemImg" src={img} alt="" />
        <div className="itemInfo">
          <h3 className="itemTitle">{name}</h3>
          <p className="itemPrice">{`Precio: $${price}`}</p>
        </div>
      </Link>
      <ItemCount initial={1} stock={stock} onAdd={cart} />
    </div>
  );
}

export default Item;
