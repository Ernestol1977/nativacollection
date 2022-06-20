import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import { ImSpinner2, ImSpinner6 } from 'react-icons/im'

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore()

    const queryCollection = collection(db, 'products')
    const queryCollectionOrder = query(queryCollection, orderBy('category'))


    if (!category) {
      getDocs(queryCollectionOrder)
        .then(resp => setProducts(resp.docs.map(prod => ({ ...prod.data(), id: prod.id }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const queryCollectionFilter = query(queryCollection, where('category', '==', category))
      getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map((item) => ({ ...item.data(), id: item.id}))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

    }
  }, [category])

  return (
    <div>
      {loading ? (
        <span className="loadingContainer">
          {/* <ImSpinner2 /> */}
          <ImSpinner6 />
          <h2>Cargando datos...</h2>
        </span>
      ) : (
        <ItemList productsFetch={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
