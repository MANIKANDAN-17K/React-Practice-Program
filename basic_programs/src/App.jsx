import Fruits from "./static_array/Fruits";
import Products from "./ProductList/Products";
import ModeChange from "./ModeChange/ModeChange";
import UserProfile from "./UserProfile/UserProfile";
import Counter from "./Counter/counter";
import StudentDashboard from "./StudentProfileCard/StudentDashboard";
import TodoList from "./ToDoList/ToDoList";
function App(){
  return (
    <div>
      <h1>React practice programs</h1>
      <div>mani</div>
      <span>kumar</span>
      <Fruits />
      <Products />
      <h1>mode changer</h1>
      <ModeChange />
      <UserProfile />
      <Counter />
      <StudentDashboard />
      <TodoList />
    </div>
  );
}
export default App;