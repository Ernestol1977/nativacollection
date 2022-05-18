import { productsList } from "../../Data/data";
import Item from "../Item/Item";
// import Loading from "../img/cargando-loading-039.gif";
import "./ItemList.css";

const ItemList = () => {
  return productsList.map((product) => (
    <Item key={product.id} product={product} />
  ));
};
export default ItemList;
