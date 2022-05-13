import ItemCount from '../ItemCount/ItemCount'
// import "./Item.css"

function Item({name, price, stock, img}) {
    function cart(count) {
        alert(`${count} items agregados al carrito`)
    }

    return (
        <div className="item">
            <img className="item__img" src={img} alt="" />
            <div className='item__info'>
                <h3 className="item__title">{name}</h3>
                <p className='item__price'>{`Precio: ${price}`}</p>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(cart)} />
        </div>
    )
}

export default Item