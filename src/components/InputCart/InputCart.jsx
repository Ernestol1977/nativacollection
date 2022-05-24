import { Link } from "react-router-dom"

const InputCart = () => {
    return (
      <>
        <Link to='/cart'>
          <button
            className="btn btn-outline-warning"
            onClick={ ()=> console.log('ir a carrito') }
          >Ir al carrito</button>
        </Link>
  
        <Link to='/'>
          <button
            className="btn btn-outline-danger"
            onClick= {()=> console.log('seguir comprando') }
          >Seguir comprando</button>
        </Link>
      </>
    )
  }

  export default InputCart