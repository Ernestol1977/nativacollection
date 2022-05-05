import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    

    return (
        <div className="App">
            <NavBar />
            <ItemListContainer saludo={'Bienvenidos al mundo de Nativa Collection'} />
        </div>
    )
}

export default App
