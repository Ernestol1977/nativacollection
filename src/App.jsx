import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    function cart(count) {
        alert(`Estupendo! Agregó ${count} items a su carrito`)
    }

    return (
        <div className="App">
            <NavBar />
            <ItemListContainer saludo={'Bienvenidos al mundo de Nativa Collection'} />
            {/* <div>
                <ItemCount stock={5} initial={1} onAdd={cart} />
            </div> */}
        </div>
    )
}

export default App

