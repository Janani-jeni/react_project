import Home from "./components/Home";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import Signup from "./components/signUp";
import Todo from "./components/todo";
import TodoApp from "./components/todo";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";

function App() {
  let user = "janani"
  return (
    <div className="app">
      {/* <TodoApp /> */}
    
      <Router>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to={`/login/${user}`}>Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ol>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} >
            <Route index element={<ProductList />}/>
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;