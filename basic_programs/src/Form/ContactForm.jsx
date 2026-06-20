import { useState } from "react";
function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name:",name);
        console.log("Email:",email);
        console.log("Message:",message);
        
    }
    return(
        <div>
            <h1>Contact Us</h1>
            <form action="" onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label>Name : </label>
                    <input type = "text" value = {name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div>
                    <label> Email :</label>
                    <input
                    type = "email"
                    value = {email}
                    onChange = {(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label>Message: </label>
                    <br />
                    <textarea
                    value = {message}
                    onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;