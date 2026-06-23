import { useState } from "react";

function ProductDelete(){
    const [isOpen,setIsOpen] = useState(false);
    return(
        <div>
            <button onClick={() => setIsOpen(true)}> delete product</button>
            {isOpen && <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} onClick={()=>setIsOpen(false)}>
                    <div 
                        style={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "5px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
                    }} onClick={(e) => e.stopPropagation()}>
                        <button onClick={()=>setIsOpen(false)}>X</button>
                        <h1>Are you sure you want to delete this product?</h1>
                        <button onClick={()=> setIsOpen(false)}>Yes, delete it</button>

                    </div>
            </div>
            }
        </div>
    )
}
export default ProductDelete;