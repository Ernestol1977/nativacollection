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
    <div className="contadorTodo mx-auto">
      <div className="contador">
        <button className="boton" onClick={contadorMenos}><FaMinus /></button>
        <p className="numero">{count}</p>
        <button className="boton " onClick={contadorMas}><FaPlus /></button>
      </div>
      <div className="botonCarrito">
        {/* <AgregarCarrito /> */}
        <button onClick={() => onAdd(count)} className="botonSumarCarrito m-4">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
