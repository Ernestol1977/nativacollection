import { productsList } from "../../Data/data";
import Item from "../Item/Item";

// import "./ItemList.css";

const ItemList = ({productsList}) => {

  return( <>{productsList.map((product) => (
    <Item key={product.id} name={product.name} img={product.img} id={product.id} stock={product.stock} price={product.price} />
  ))}</>);
};

export default ItemList;
