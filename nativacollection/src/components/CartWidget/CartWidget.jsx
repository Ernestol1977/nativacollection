import { Link } from 'react-router-dom'
import logo from '../img/cartWidget.svg'
import './CartWidget.css'

const CartWidget = () => {

  return (
    <>
      <Link to='/cart' >
        <img src={logo} alt="imagen" />
      </Link>
    </>
  )
}

export default CartWidget