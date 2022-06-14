import { useLocation } from "react-router-dom";
import style from "./product.css";

export default function Product() {
  const location = useLocation();

  const product = location.state.pro;

  console.log(product);
  return (
    <div className="product">
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
      <img className="imgProduct" src={product.image} />
      <button className="buttonProduct">{product.price}</button>
    </div>
  );
}
