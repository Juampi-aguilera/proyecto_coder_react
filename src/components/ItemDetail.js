import { useContext } from "react"
import { CartContext } from "./CartContext"
import ItemCount from "./ItemCount"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext)
    
    const onAdd = (cant) =>{
        toast('Producto añadido al carrito!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        addItem(item,cant)
    }

    return(
    <>
        <div className="product_container">
            <img src={item.image} alt={`poster de `+item.name}/>
            <div className="product_details">
                <h1>{item.name}</h1>
                <p>Tamaño: {item.sizes}</p>
                <p>Stock: {item.stock}</p>
                <p>${item.price}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                <ToastContainer/>
            </div>
        </div>
        
    </>
    )
}

export default ItemDetail