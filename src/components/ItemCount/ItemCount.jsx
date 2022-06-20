import { useState } from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'

import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial)

  function contadorMas() {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("no hay más stock de este producto")
    }
  }

  function contadorMenos() {
    if (count > initial) {
      setCount(count - 1);
    } else {
      alert("debe contener al menos un artículo")
    }
  }

  return (
    <div className="counterAll mx-auto">
      <div className="counter">
        <button className="button" onClick={contadorMenos}><FaMinus /></button>
        <p className="number">{count}</p>
        <button className="button" onClick={contadorMas}><FaPlus /></button>
      </div>
      <div className="buttonCart">
        <button onClick={() => onAdd(count)} className="buttonAddCart m-4">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
