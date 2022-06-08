import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/products";
import Product from "./pages/product";
import Titel from "./home  components/Titel";
import Cart from "./home  components/Cart";
function App() {
  return (
    <div>
      <Titel />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/:category/:product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
