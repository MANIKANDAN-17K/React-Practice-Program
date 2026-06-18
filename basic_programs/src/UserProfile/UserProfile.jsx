import { useState } from "react";

function UserProfile() {
    const [user,setUser] = useState("");
    const handleChange = (event) => {
        setUser(event.target.value.toUpperCase());
    }
    return(
        <div>
            <h1>User Profile</h1>
            <input
            type = "text"
            value={user}
            placeholder = "enter your name"
            onChange={handleChange}
            />
            <h2>Welcome: {user}</h2>
        </div>
    );
}
export default UserProfile;