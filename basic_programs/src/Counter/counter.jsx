import { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);
    const incre = () => {
        setCount(count + 1);
    }
    const decre = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={incre}>+</button>
            <button onClick={decre}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;