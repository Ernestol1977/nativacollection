// import { productsList } from "../../Data/data";
// import Spinner from "react-bootstrap/Spinner";

const ItemDetail = ({ img, name, price, detail }) => {
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
