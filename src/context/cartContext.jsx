import { createContext, useState } from 'react'

export const cartContext = createContext([]);

//Esto es un componente
const CartContextProvider = ({ children }) => {


  const [cartList, setCartList] = useState([])

  function addToCart(item) {
    setCartList([
      ...cartList,+
      item])

  }

  return (
    <cartContext.Provider value={{
      cartList,
      addToCart
    }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider