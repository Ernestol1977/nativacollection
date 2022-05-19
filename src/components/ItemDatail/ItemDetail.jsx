// import { productsList } from "../../Data/data";
// import Spinner from "react-bootstrap/Spinner";

import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ img, name, price, detail }) => {

    // const {addToCart} = useContext(cartContext)

  return (
    <div className="itemDetail">
      <div className="detailPhoto">
        <img src={img} alt="" />
      </div>
      <div className="detailName">{name}</div>
      <div className="detailPrice">${price}</div>
      <div className="detailDetail">{detail}</div>
    </div>
  );
};

export default ItemDetail;
