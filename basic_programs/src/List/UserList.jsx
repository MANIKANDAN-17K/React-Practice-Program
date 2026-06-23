import {useState,useEffect} from "react";
function UserList(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
    return(
        <div>
            <h1>User List</h1>
            {users.map((user) => <p key={user.id}>{user.name} - {user.email} - {user.phone}</p>)}
        </div>
    )
}
export default UserList;