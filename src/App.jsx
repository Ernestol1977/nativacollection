import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import CartContextProvider from "./context/cartContext";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    function cart(count) {
        alert(`Estupendo! Agregó ${count} items a su carrito`);
    }

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer saludo={"Bienvenidos al mundo de Nativa Collection"} /> } />
                    <Route path="/tienda/:category" element={<ItemListContainer/>} />
                    <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartWidget />} />

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
