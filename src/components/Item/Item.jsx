import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

function Item({ product, stock }) {
  function cart(count) {
    alert(`${count} items agregados al carrito`);
  }

  return (
    <div className="item">
      <Link to={`/detalle/${product.id}`}>
        <img className="itemImg" src={product.img} alt="" />
        <div className="itemInfo">
          <h3 className="itemTitle">{product.name}</h3>
          <p className="itemPrice">{`Precio: $${product.price}`}</p>
        </div>
      </Link>
      <ItemCount initial={1} stock={stock} onAdd={cart} />
    </div>
  );
}

export default Item;
