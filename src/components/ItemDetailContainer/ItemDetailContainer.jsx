import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsList } from "../../Data/data";

import ItemDetail from "../ItemDatail/ItemDetail";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState({});
//   // const { detailId } = useParams();

//   useEffect(() => {
//     getFetch(detailId)
//       .then((response) => setProduct(response))
//       .catch((err) => console.log(err));
//   }, []);

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const { detalleId } = useParams();

  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });

  useEffect(() => {
    promesa.then((respuesta) => {
      setProduct(respuesta.find((product) => product.id === detalleId ));
    });
  }, []);

  return (
    <div>
      <ItemDetail
        product = {product}
        // name={product.name}
        // id={product.id}
        // price={product.price}
        // detail={product.detail}
        // img={product.img}
        // stock={product.stock}
        
      />
      <Link className="buttonVolver" to="/tienda">
        <span>VOLVER</span>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;

