import { productsList } from "../../Data/data";
import Item from "../Item/Item";
import Loading from '../img/cargando-loading-039.gif'
import "./ItemList.css"

const ItemList = () => {
    return (
        productsList.map((prod) =>  <Item key={prod.id} prod={prod} />)
    )
}

export default ItemList