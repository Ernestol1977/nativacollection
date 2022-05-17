import { productsList } from "../../Data/data"
// import Spinner from 'react-bootstrap/Spinner'

const ItemDetail = ({product}) => {
    return (
        <div className="itemDetail">

            <div className="detailPhoto">
                img={product.img}
            </div>
            <div className='detailName'>
                name={product.name}
            </div>
            <div className='detailPrice'>
                price={product.price}
            </div>
            <div className='detailDetail'>
                price={product.detail}
            </div>
        </div>
    )
}

export default ItemDetail