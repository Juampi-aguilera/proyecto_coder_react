import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { products } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer=()=>{
    const [product,setProduct]=useState({});
    const { id } = useParams();

    useEffect(()=>{
        customFetch(1500, products.find(item=>item.id===parseInt(id)))
            .then(result=>setProduct(result))
            .catch(err=>console.log(err))
    },[])
   
    return(
        <ItemDetail item={product}/>
    )
}

export default ItemDetailContainer