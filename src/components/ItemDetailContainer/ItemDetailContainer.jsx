import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ItemDetail from "../ItemDatail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const { detailId } = useParams();
  const idNotFound = useNavigate();

  useEffect(() => {
    const db = getFirestore();

    const dbQuery = doc(db, "products", detailId);

    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && idNotFound("Id Not Found", { replace: true });
        setProduct({ ...resp.data(), id: resp.id });
      })
      .catch((err) => consol.log(err));
  }, [idNotFound]);

  return (
    <div className="itemDetCont">
      <ItemDetail product={product} />
      <Link to="/tienda">
        <span className="buttonReturn">VOLVER</span>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;
