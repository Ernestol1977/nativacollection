import Item from "../Item/Item";

// import "./ItemList.css";

const ItemList = ({productsList}) => {

  return( <>{productsList.map((product) => (
    <Item key={product.id} name={product.name} photo={product.photo} id={product.id} stock={product.stock} price={product.price} />
  ))}</>);
};

export default ItemList;
