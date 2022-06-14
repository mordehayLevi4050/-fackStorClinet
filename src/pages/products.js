import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import style from "./Products.css";

export default function Products() {
  const location = useLocation();
  const params = useParams();
  const products = location.state.products;
  const [pro, setPro] = useState(products);

  function filterPro() {
    setPro(products.filter((pro) => pro.category === params.category));
  }

  useEffect(filterPro, []);

  console.log(pro);
  return (
    <div className="ulDiv">
      {pro.map((pro) => (
        <div className="liProduct" key={pro.id}>
          <img className="imgLi" src={pro.image} />
          <div>{pro.title}</div>
          <div>price: {pro.price}</div>
          <Link to={"/" + pro.category + "/" + pro.id} state={{ pro }}>
            <button>entrance</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
