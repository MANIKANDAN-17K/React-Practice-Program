import {useState} from "react";
function EmailForm(){
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(email.trim() === ""){
            setError("email is required");
            return;
        }
        if(!email.includes("@")){
            setError("email should contain @");
            return;
        }
        console.log("Email:",email);
        setError("");
    }
    return(
        <div>
            <h1>Email Form</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                    type = "email"
                    value = {email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                </div>
                {error && <p style={{color: "red"}}>{error}</p>}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default EmailForm;