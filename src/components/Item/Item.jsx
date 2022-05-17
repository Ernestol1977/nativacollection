import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"

function Item({name, price, stock, img}) {
    function cart(count) {
        alert(`${count} items agregados al carrito`)
    }

    return (
        <div className="item">
            <img className="itemImg" src={img} alt="" />
            <div className='itemInfo'>
                <h3 className="itemTitle">{name}</h3>
                <p className='itemPrice'>{`Precio: $${price}`}</p>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(cart)} />
        </div>
    )
}

export default Item