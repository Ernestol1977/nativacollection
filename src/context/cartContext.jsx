import { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

//Esto es un componente
const cartContextProvider = ({ children }) => {
//Estados y funciones globales

  const [cartList, setCartList] = useState([])

  function addToCart(item) {
    const index = cartList.findIndex((product) => product.id === item.id)
    if (index !== -1) {
      const cantOld = cartList[index].quantity    
      cartList[index].quantity = cantOld + item.quantity
      setCartList([...cartList])
    } else {
      setCartList([
        ...cartList,
        item])
    }
  }

  const removeItem = (id) =>{
    setCartList(cartList.filter(prod => prod.id !== id))
  } 

  const cantidadTotal = () => {
    return cartList.reduce((contador, prod) => contador += prod.quantity ,0)
  }

  const totalPrice = () => {
    return cartList.reduce((contador, prod) => contador += (prod.quantity * prod.price) ,0)
  }

  const vaciarCarrito = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      vaciarCarrito,
      removeItem,
      cantidadTotal,
      totalPrice
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default cartContextProvider