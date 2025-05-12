import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProducts } from "../redux/slices/productSlice";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { products, selectedProduct } = useSelector((store) => store.product);

  const { image, price, title, description } = selectedProduct;

  useEffect(() => {
    getProductByID();
  }, []);

  const getProductByID = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProducts(product));
        }
      });
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "40px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial" }}>{title}</h1>
        <p style={{ fontFamily: "arial", fontSize: "20px" }}>{description}</p>
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "arial",
            fontWeight: "bold ",
            color: "blue",
          }}
        >
          {price}₺
        </h1>
      </div>
    </div>
  );
}

export default ProductDetails;
