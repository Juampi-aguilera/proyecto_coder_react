const ItemDetail = ({product}) =>{
    console.log(product)
    return(
    <>
        <img src={product.image}/>
    </>
    )
}

export default ItemDetail