import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  function cart(count) {
    alert(`Estupendo! Agregó ${count} items a su carrito`);
  }

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos al mundo de Nativa Collection. A la brevedad se reestablecerá la página"} />} />
            <Route path="/categoria/:category" element={<ItemListContainer />} />
            <Route path="/detalle/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </CartContextProvider>
      {/* <button onClick={ProductFb}>cargar</button> */}
    </BrowserRouter>
  );
}

export default App;
