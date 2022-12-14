import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer=()=>{
    const [product,setProduct]=useState({});
    const { id } = useParams();
    
    const getData = async () =>{
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        let data = {
            id: id,
            ...docSnap.data()
        }
        return setProduct(data);
    }

    useEffect(() => {
        getData();
    },[])
    
    return(
        product.image
        ?<ItemDetail item={product}/>
        :<h4 className="m-4">Producto no encontrado</h4>
    )
}

export default ItemDetailContainer