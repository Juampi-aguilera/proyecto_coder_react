import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import {Link} from 'react-router-dom';
import { db } from "../utils/firebaseConfig";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";

const Cart = () =>{
    const {cartList, clearCart, totalCarrito} = useContext(CartContext)
    let total = totalCarrito();
    const createOrder = () =>{
        let order = {
            buyer:{
                name: 'Juan Pablo Aguilera',
                email: 'juampiag3@gmail.com',
                phone: 11122234
            },
            date:serverTimestamp(),
            items: cartList.map(item =>({
                id:item.id,
                price: item.price,
                title: item.name,
                qty: item.cantidad
            })),
            total: total
        }
        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef,order);        
            return newOrderRef;
        }
        
        createOrderFirestore()
            .then(res => {
                alert('Orden creada! Su ID es: '+ res.id)
                cartList.forEach(async(item) => {
                    const productRef = doc(db, "products", item.id);
                    await updateDoc(productRef, {
                        stock: increment(-item.cantidad)
                    });
                })
                clearCart()})
            .catch(err => console.log(err))
    }

    return(
        <>
            <h1 className="titulo_main">Carrito</h1>
            
            {cartList.length>0
            ? <button id="eliminar_carrito" className="btn btn-danger" onClick={clearCart}>Eliminar carrito</button>
            : <>
                <p className="ms-3">No hay productos en el carrito.</p>
                <Link className="ms-3 btn btn-outline-primary" to="/">Seguir comprando</Link>
            </>}
            
            {cartList.length>0 && <>
                {cartList.map(item=><CartProduct product={item} key={item.id}/>)}
                <h3 className="ms-5">Total: ${total}</h3>
                <button className="ms-5 btn btn-primary" onClick={createOrder}>Finalizar compra</button>
            </>}
        </>       
    )
}

export default Cart;