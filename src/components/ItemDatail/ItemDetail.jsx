
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import InputCart from "../InputCart/InputCart";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product, onAdd }) => {

  const [inputType, setInputType ] = useState('button')

  const handleInter=()=>{
      setInputType('other')
  }
  
  const {addToCart, cartList} = useCartContext()

  function onAdd (qty) {
    alert(`${qty} items agregados al carrito`); 
    addToCart ({...product, quantity:qty})
    handleInter()
  }

  // console.log(cartList)

  return (
    <div className="itemDetail">
      <div className="detailPhoto">
        <img src={product.photo} alt="" />
      </div>
      <div className="detailName">{product.name}</div>
      <div className="detailPrice">${product.price}</div>
      <div className="detailDetail">{product.description}</div>
      <div>
        {
          inputType === 'button' ? 
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} handleInter={handleInter} />
            : 
            <InputCart />
        }
      </div>
    </div>
  );
};

export default ItemDetail;