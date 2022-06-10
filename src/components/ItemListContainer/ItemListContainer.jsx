import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState({});
  // const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore()

    const queryCollection = collection(db, 'products')


    if (!category) {
      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const queryCollectionFilter = query(queryCollection, where('category', '==', category))
      getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

    }
  }, [category])

  console.log(products)

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

