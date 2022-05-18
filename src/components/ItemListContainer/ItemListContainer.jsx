import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../Data/data";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo = "Saludos" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch()
        .then((respuesta) =>
          setProducts(respuesta.filter((prods) => prods.category === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch()
        .then((respuesta) => setProducts(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <div>
      <h2 className="saludo">{saludo}</h2>
      {loading ? (
        <span className="cargando container">
          <img className="w-100" src={loading} />
          <h2>Cargando datos...</h2>
        </span>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
