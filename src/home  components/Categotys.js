import { Link } from "react-router-dom";
import style from "./Categorys.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Categorys() {
  const [products, setProducts] = useState([]);
  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }

  useEffect(getProducts, []);

  console.log(products);
  let pro = products.map((pro) => pro.category);
  pro = pro.filter((cat, i) => cat != pro[i - 1]);
  console.log(pro);

  return pro.map((items) => (
    <div
      className="categorys"
      id={items.split(" ").join("").split("'").join("")}
      key={items}
    >
      <Link to={"/" + items} state={{ products }}>
        {items}
      </Link>
    </div>
  ));
}
