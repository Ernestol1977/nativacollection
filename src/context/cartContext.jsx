import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { createContext, useContext, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  console.log(findProduct)
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

  function toastifyWarning(text, time) {
    toast.warn(text, {
      position: "top-center",
      autoClose: time,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastifyWarning",
    });
  }

  function toastifyOk(text) {
    toast.success(text, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastifyOk",
    });
  }

  function toastifyOrder(text) {
    toast.success(text, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastifyOk",
    });
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
        
        order.date = new Date();

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
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .then(toastifyOk("Completaste tu compra! Está siendo procesada..."))
        .then((resp) => toastifyOrder(`Gracias por su compra! Su id de compra es: ${resp.id}. También le llegara a su email`), 5000)
        .catch((err) => console.log(err))
        .finally(() => {
          setTimeout(() => {
            window.location.href = "/";
          }, 14000)
        }); 
      }

    } 
    else {
      toastifyWarning("Revise su informacion", 2500);
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
      purchaseOrder,
      toastifyWarning
    }}>
      <ToastContainer />
      {children}
    </CartContext.Provider>
  )
}


export default cartContextProvider