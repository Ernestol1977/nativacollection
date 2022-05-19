import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../Data/data";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        if (category) {
            getFetch()
                .then((respuesta) =>
                    setProducts(respuesta.filter((prods) => prods.category === category))
                )
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch()
                .then((respuesta) => setProducts(respuesta))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [category]);

    return (
        <div>
            {loading ? (
                <span className="cargando container">
                    <img className="w-100" src={loading} />
                    <h2>Cargando datos...</h2>
                </span>
            ) : (
                <ItemList productsList={products} />
            )}
        </div>
    );
};

export default ItemListContainer;

