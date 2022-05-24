
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import InputCart from "../InputCart/InputCart";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ img, name, price, detail, stock, cart }) => {

  const [inputType, setInputType ] = useState('button')

  const handleInter=()=>{
      setInputType('other')
  }
  
  // const {addToCart, cartList} = useContext(cartContext)

  // const onAdd = (cant) => {
  //     console.log(cant)
  //     addToCart ({name, cant})
  // }

  // console.log(cartList)
  
    // const {addToCart} = useContext(cartContext)
  
  return (
    <div className="itemDetail">
      <div className="detailPhoto">
        <img src={img} alt="" />
      </div>
      <div className="detailName">{name}</div>
      <div className="detailPrice">${price}</div>
      <div className="detailDetail">{detail}</div>
      <div>
        {/* <button onClick={onAdd}>Agregar carrito</button> */}
        {
          inputType === 'button' ? 
            <ItemCount initial={1} stock={stock} onAdd={cart} handleInter={handleInter} />
            : 
            <InputCart />
        }
        {/* <InputCart /> */}

      </div>
    </div>
  );
};

export default ItemDetail;
