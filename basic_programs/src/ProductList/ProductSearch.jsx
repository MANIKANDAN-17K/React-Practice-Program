import { useState } from "react";
import Card from "../Cards/Card";

function ProductSearch(){
    const [search,setSearch] = useState("");
    const products = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Grapes",
        "Pineapple",
        "Strawberry",
        "Watermelon",
        "Blueberry",
        "Kiwi",
        "Papaya",
        "Peach",
        "Pear",
        "Plum",
        "Raspberry",
        "Cherry",
        "Coconut",
        "Lemon",
        "Lime",
        "Apricot"
    ]
    const filteredProducts = products.filter(product => product.toLowerCase().includes(search.toLowerCase()));
    return(
        <div>
            <h1>Product Search</h1>
            <input type ="text" placeholder="search product" value = {search} onChange={(e) => setSearch(e.target.value)}></input>
            {filteredProducts.map((product,index) => <Card key={index} name={product} />)}
        </div>
    )
}
export default ProductSearch;