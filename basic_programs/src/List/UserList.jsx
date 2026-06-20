import {useState,useEffect} from "react";
function UserList(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {setUsers(data); setLoading(false);})
        .catch(err => {console.error("Error fetching users",err); setLoading(false);});
    },[]);
    if(loading){
        return <p>Loading...</p>;
    }
    return(
        <div>
            <h1>User List</h1>
            {users.map((user) => <p key={user.id}>{user.name} - {user.email} - {user.phone}</p>)}
        </div>
    )
}
export default UserList;