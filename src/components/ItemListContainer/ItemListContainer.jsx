
import './ItemListContainer.css'

const ItemListContainer = ({ saludo='Saludos' }) => {
    return (
        <div className='saludo'>{saludo}</div>
    )
}

export default ItemListContainer