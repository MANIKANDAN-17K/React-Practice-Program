import Fruits from "./static_array/Fruits";
import ProductSearch from "./ProductList/ProductSearch";
import ModeChange from "./ModeChange/ModeChange";
import UserProfile from "./UserProfile/UserProfile";
import Counter from "./Counter/counter";
import StudentDashboard from "./StudentProfileCard/StudentDashboard";
import TodoList from "./ToDoList/ToDoList";
import ContactForm from "./Form/ContactForm";
import EmailForm from "./Form/EmailForm";
import UserList from "./List/UserList";
import ProductTab from "./ProductList/ProductTab";
import ProductDelete from "./ProductList/ProductDelete";

function App(){
  return (
    <div>
    {/*  <h1>React practice programs</h1>
      <div>mani</div>
      <span>kumar</span>
      <Fruits />
      <Products />
      <h1>mode changer</h1>
      <UserProfile />
      <Counter />
      <StudentDashboard />
      <TodoList />
      <ContactForm />
      <ModeChange />
      <UserList />
      <ProductSearch />
      <ProductTab />
      <EmailForm /> */}
      <ProductDelete />
    </div>
  );
}
export default App;