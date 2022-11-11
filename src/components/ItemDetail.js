import ItemCount from "../utils/ItemCount"

const ItemDetail = ({item}) =>{
    return(
    <>
        <div className="product_container">
            <img src={item.image}/>
            <div className="product_details">
                <h1>{item.name}</h1>
                <p>Tamaño: {item.sizes}</p>
                <p>${item.price}</p>
                <ItemCount initial={1} stock={item.stock}/>
                <button id="btn_agregar_carrito">Agregar al carrito</button>
            </div>
        </div>
        
    </>
    )
}

export default ItemDetail