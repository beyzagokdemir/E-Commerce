import React from "react";
import "../css/product.css";

function Product({ product }) {
  const { id, image, price, title, description } = product;
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>
    </div>
  );
}

export default Product;
