function Products(){
    const Product = [
        {id:1, name:"laptop",price:50000},
        {id:2, name:"mobile",price:20000},
        {id:3, name:"tablet",price:30000},
    ]
    return(
        <div>
            <h1>Product List</h1>
            {Product.map((product) => {
                return(
                <div key={product.id}>
                    <span >{product.id}</span> -
                    <span >{product.name}</span> -
                    <span >{product.price}</span>
                </div>
            
)})}
        </div>
    )
}
export default Products;