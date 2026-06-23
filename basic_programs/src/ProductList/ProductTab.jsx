import { useState } from "react";

function ProductTab(){
    const [activeTab,setActiveTab] = useState("desc");
    return(
        <div>
            <h1>
                <button onClick={()=> setActiveTab("desc")}>description</button>
                <button onClick={()=> setActiveTab("spec")}>specification</button>
                <button onClick={()=> setActiveTab("review")}>review</button>
            </h1>
            {activeTab === "desc" && <p>this is description</p>}
            {activeTab === "spec" && <p>this is specification</p>}
            {activeTab === "review" && <p>this is review</p>}
        </div>
    )
}
export default ProductTab;