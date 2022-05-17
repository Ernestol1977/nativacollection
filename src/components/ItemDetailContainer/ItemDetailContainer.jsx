import { useEffect, useState } from "react"
// import { useParams} from "react-router-dom"
import { getFetch } from "../../Data/data"
import ItemDetail from "../ItemDatail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {detailId} = useParams()

    useEffect(() => {
        getFetch(detailId)
            .then(response => setProduct(response))
            .catch((err) => console.log(err))
            // .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <ItemDetail product ={product}/>
        </div>
    )
}

export default ItemDetailContainer