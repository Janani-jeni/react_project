import Home from "./components/Home";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import Signup from "./components/signup";
import Todo from "./components/todo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  let user = "janani";
  return (
    <div className="app">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
