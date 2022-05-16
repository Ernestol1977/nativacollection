import { useEffect, useState } from "react";
import { productsList } from "../../Data/data";
import Item from "../Item/Item";
import Loading from '../img/cargando-loading-039.gif'
import "./ItemList.css"

const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
        }, 2000);
    });

    useEffect(() => {
        fetchProduct
            .then(respuesta => setProducts(respuesta))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])



    return (
        <div className="product-list-container">
            {loading ?
                <div className="cargando container">
                    <img className="w-100" src={Loading} />
                    <h2>Cargando datos...</h2>
                </div>
                :
                products.map((product) => {
                    return (
                        <div key={product.id} className="loaderInicio">
                            <Item
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                stock={product.stock}
                            />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ItemList