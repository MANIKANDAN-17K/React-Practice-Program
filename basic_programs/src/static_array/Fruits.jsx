function Fruits() {
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    return(
        <div>
            
                {fruits.map(
                    (fruit, idx) => <p key = {idx}>{idx}: {fruit}</p>
                )}
            
        </div>
    );
}
export default Fruits;