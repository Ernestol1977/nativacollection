
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import InputCart from "../InputCart/InputCart";
import ItemCount from "../ItemCount/ItemCount";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import "./itemDetail.css"

const ItemDetail = ({ product, onAdd }) => {

  const [inputType, setInputType ] = useState('button')

  const handleInter=()=>{
    setInputType('other')
  }
  
  const {addToCart} = useCartContext()

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

  function onAdd (qty) {
    
    toastifyItem(`${qty} items agregados al carrito`); 
    addToCart ({...product, quantity:qty})
    handleInter()
  }

  return (
    <div className="itemDetail">
      <div className="detailPhoto">
        <img src={product.photo} alt="" />
      </div>
      <div className="detailName">{product.name}</div>
      <div className="detailPrice">${product.price}</div>
      <div className="detailDetail">{product.detail}</div>
      <div>
        {
          inputType === 'button' ? 
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} handleInter={handleInter} />
            : 
            <InputCart /> 
          }
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;