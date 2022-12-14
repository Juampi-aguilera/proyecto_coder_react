import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    //Hook
    const [productos,setProductos]=useState([]);
    const { category } = useParams();

    let qry;
    if(category){
        qry = query(collection(db, "products"), where('category','==',category));
    }else{
        qry = collection(db, "products")
    }

    const getData = async () =>{
        const querySnapshot = await getDocs(qry);
        const dataFromFirestore = querySnapshot.docs.map(item =>({
            id: item.id,
            ...item.data()
        }));
        setProductos(dataFromFirestore)
    }

    //componentDidUpdate
    useEffect(()=>{
        getData();
    },[category])

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setProductos([]);
        })
    }, []);

    return(
        <>
            <div className="container_products">
                <ItemList items={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer;