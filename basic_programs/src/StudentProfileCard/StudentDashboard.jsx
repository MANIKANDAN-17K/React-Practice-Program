import StudentCard from "./StudentCard";

function StudentDashboard(){
  
    return(
        <div>
            <h1>Student Dashboard</h1>
            <StudentCard name="manikandan" age={22}/>
        </div>
    )
}
export default StudentDashboard;