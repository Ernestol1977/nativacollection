import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  function cart(count) {
    alert(`Estupendo! Agregó ${count} items a su carrito`);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                saludo={"Bienvenidos al mundo de Nativa Collection"}
              />
            }
          />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer saludo={"Online Shop"} />}
          />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          {/* <Route path="/cart" element={<Cart />} /> */}

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
