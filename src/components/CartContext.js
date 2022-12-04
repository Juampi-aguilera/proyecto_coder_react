import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) =>{
    const [cartList,setCartList] = useState([])
    
    const addItem = (item,cant) =>{  //falta cantidad
        const repetido=cartList.indexOf(item); 
        //si no esta repetido se agrega al carrito       
        if(repetido===-1){
            item.cantidad=cant;
            setCartList([
            ...cartList
            ,item
        ])}else{ 
            //si se agrega un producto nuevamente se agregue a la cantidad
            item.cantidad+=cant
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