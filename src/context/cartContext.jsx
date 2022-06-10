import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

//Esto es un componente
const cartContextProvider = ({ children }) => {
  //Estados y funciones globales

  const [cartList, setCartList] = useState([])
  const [product, setProduct] = useState({})

  function findProduct(id) {
    const db = getFirestore()
    const dbQuery = doc(db, "products", id)
    getDoc(dbQuery)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
  }


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

  const removeItem = (id) => {
    setCartList(cartList.filter(prod => prod.id !== id))
  }

  const cantidadTotal = () => {
    return cartList.reduce((contador, prod) => contador += prod.quantity, 0)
  }

  const totalPrice = () => {
    return cartList.reduce((contador, prod) => contador += (prod.quantity * prod.price), 0)
  }

  const vaciarCarrito = () => {
    setCartList([])
  }

  const purchaseOrder = (e) => {
    const inputFirst = document.getElementById("firstName").value;

    const inputLast = document.getElementById("lastName").value;

    const inputCellPhone = document.getElementById("cellPhone").value;

    const inputAddress = document.getElementById("address").value;

    const inputEmail = document.getElementById("email").value;

    const inputEmailRepeat = document.getElementById("formEmailRepeat").value;

    if (inputEmail === inputEmailRepeat) {

      if (
        inputFirst != "" &&
        inputLast != "" &&
        inputEmail != "" &&
        inputEmailRepeat != "" &&
        inputCellPhone != "" &&
        inputAddress != ""
      ) {
        e.preventDefault(e);
        let order = {};

        order.buyer = {
          name: inputFirst,
          surname: inputLast,
          phone: inputCellPhone,
          address: inputAddress,
          email: inputEmail,
        };

        order.products =
          cartList.map(cartProduct => {
            const id = cartProduct.id
            const name = cartProduct.name
            const quantity = cartProduct.quantity
            const price = cartProduct.price * cartProduct.quantity 

            return { id, name, quantity, price };
          });

        order.total = totalPrice();

        const db = getFirestore()
        const queryCollection = collection(db, 'Orders');
        addDoc(queryCollection, order)
          .then(resp => console.log(resp))
          .catch(err => console.log(err))
          .finally(() => alert("Completaste tu compra! Pronto te llegara un mail con tu número de orden"))
      }

    } 
    else {
      alert("Revise su informacion")
    }
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      vaciarCarrito,
      removeItem,
      cantidadTotal,
      totalPrice,
      product,
      findProduct,
      purchaseOrder
    }}>
      {children}
    </CartContext.Provider>
  )
}


export default cartContextProvider