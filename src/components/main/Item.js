import { Link } from "react-router-dom";

const Item = (producto) =>{
    return(
        <div className="product_card">
            <Link to={`/product/${producto.id}`}>   
                <img src={producto.image} alt={`poster de `+producto.name}></img>
                <div className="info_product">${producto.price}</div>
            </Link>
        </div>
    )
}

export default Item;