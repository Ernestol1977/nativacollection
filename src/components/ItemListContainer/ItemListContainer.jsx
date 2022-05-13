
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

const ItemListContainer = ({ saludo='Saludos' }) => {
    return (
        <div>
            <h2 className='saludo'>
                {saludo}
            </h2>
            <ItemList />
        </div>
    )
}

export default ItemListContainer