import {Link} from 'react-router-dom';

const Product = (product) =>{
    return(
        <div className="product_card">
            <Link to={`/product/${product.id}`}>   
                <img src={product.image} alt={`poster de `+product.name}></img>
                <div className="info_product">${product.price}</div>
            </Link>
        </div>
    )
}

export default Product;