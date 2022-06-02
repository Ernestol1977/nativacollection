import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ItemDetail from "../ItemDatail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const { detailId } = useParams();

  // const promesa = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(productsList);
  //   }, 2000);
  // });

  useEffect(() => {
    const db = getFirestore()

    const dbQuery = doc(db, 'Products', detailId)
    
    getDoc(dbQuery)
      .then(resp => setProduct( { id:resp.id, ...resp.data() } ) )

  }, [])

  return (
    <div>
      <ItemDetail
        product = {product}
      />
      <Link className="buttonVolver" to="/tienda">
        <span>VOLVER</span>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;

