import Item from "./Item";

const ItemList = ({ items }) =>{
    return(<>
        {
            items.length>0
            ? items.map((producto)=>(
                <Item
                key={producto.id}
                id={producto.id}
                image={producto.image}
                name={producto.name}
                price={producto.price}
                size={producto.size} />
                ))
            : <h4>Cargando...</h4>
        }
    </>)
}

export default ItemList;