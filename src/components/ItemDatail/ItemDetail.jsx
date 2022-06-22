import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import InputCart from "../InputCart/InputCart";
import ItemCount from "../ItemCount/ItemCount";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd }) => {
  const [inputType, setInputType] = useState("button");

  const handleInter = () => {
    setInputType("other");
  };

  const { addToCart } = useCartContext();

  function toastifyItem(text) {
    toast.success(text, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function onAdd(qty) {
    toastifyItem(`${qty} items agregados al carrito`);
    addToCart({ ...product, quantity: qty });
    handleInter();
  }

  return (
    <div className="itemDetail">
      <div className="detailPhoto">
        <img src={product.photo} alt="" className="imgDetail" />
      </div>
      <div className="detailInfo">
        <h2 className="detailName">{product.name}</h2>
        <h3 className="detailPrice">${product.price}</h3>
        <h3 className="detailDetail">{product.detail}</h3>
        <div className="inputDiv">
          {inputType === "button" ? (
            <ItemCount
              initial={1}
              stock={product.stock}
              onAdd={onAdd}
              handleInter={handleInter}
            />
          ) : (
            <InputCart />
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
