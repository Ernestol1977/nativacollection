import Item from "../Item/Item";

const ItemList = ({productsFetch}) => {


  return( <>{productsFetch.map((product) => (
    <Item key={product.id} name={product.name} photo={product.photo} id={product.id} stock={product.stock} price={product.price} />
  ))}</>);
};

export default ItemList;
