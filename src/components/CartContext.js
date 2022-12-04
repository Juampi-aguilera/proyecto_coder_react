import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) =>{
    const [cartList,setCartList] = useState([])
    
    const isInCart = (id) => {
        return cartList.some(el => el.id === id)
    }

    const addItem = (item,cant) =>{
        const newObj = {
            ... item,
            cantidad:cant
        }
        if(isInCart(newObj.id)){
            cartList.map(el => {
                if(el.id === newObj.id)  {
                    el.cantidad += newObj.cantidad
                }
            return(el)
            })
        }else {
            setCartList([... cartList, newObj])
        }
    }

    const clearCart = () =>{
        setCartList([])
    }

    const removeItem = (id) =>{
        const newArray = cartList.filter(item => item.id !== id)
        setCartList(newArray)
    }

    const totalCarrito = () =>{
        let total=0;
        cartList.map((item) => total += item.cantidad*item.price);
        return total;
    }

    

    return(
        <CartContext.Provider value={{cartList, addItem, clearCart, removeItem, totalCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

// const addItem = (item,cant) =>{  //falta cantidad
//     const repetido=cartList.indexOf(item); 
//     //si no esta repetido se agrega al carrito       
//     if(repetido===-1){
//         item.cantidad=cant;
//         setCartList([
//         ...cartList
//         ,item
//     ])}else{ 
//         //si se agrega un producto nuevamente se agregue a la cantidad
//         item.cantidad+=cant
//     }
// }