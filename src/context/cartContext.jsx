import {createContext, useState} from 'react'

export const cartContext = createContext([]);

const CartContextProvider = ({children}) => {
    //Estados y funciones globales
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        setCartList(item)
        
    }

    return (
        <cartContext.Provider value={ {
            cartList,
            addToCart
        } }>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider