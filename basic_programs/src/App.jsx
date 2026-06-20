import Fruits from "./static_array/Fruits";
import Products from "./ProductList/Products";
import ModeChange from "./ModeChange/ModeChange";
import UserProfile from "./UserProfile/UserProfile";
import Counter from "./Counter/counter";
import StudentDashboard from "./StudentProfileCard/StudentDashboard";
import TodoList from "./ToDoList/ToDoList";
import ContactForm from "./Form/ContactForm";
import EmailForm from "./Form/EmailForm";
import UserList from "./List/UserList";
function App(){
  return (
    <div>
    {/*  <h1>React practice programs</h1>
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
      <ContactForm />
      <EmailForm /> */}
      <UserList />
    </div>
  );
}
export default App;