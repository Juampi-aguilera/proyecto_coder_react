import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch";
import { useParams } from 'react-router-dom'

const ItemListContainer = () =>{
    //Hook
    const [productos,setProductos]=useState([]);
    const { category } = useParams();
    
    //componentDidUpdate
    useEffect(()=>{
        //llamado a la supuesta API
        if(category===undefined){
            customFetch(1500,products)
                .then(response=>setProductos(response))
                .catch(console.log("error"))
        }else{
            customFetch(1500,products.filter(product=> product.category == category))
                .then(response=>setProductos(response))
                .catch(console.log("error"))
        }
    },[category])

    return(
        <>
            <div className="container_products">
                {productos.map((producto)=>(
                    <Product
                    key={producto.id}
                    id={producto.id}
                    image={producto.image}
                    name={producto.name}
                    price={producto.price}
                    size={producto.size} />
                ))}
            </div>
        </>
    )
}

export default ItemListContainer;