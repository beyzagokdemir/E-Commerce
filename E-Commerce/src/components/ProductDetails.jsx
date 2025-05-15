import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProducts } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { products, selectedProduct } = useSelector((store) => store.product);

  const { image, price, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

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

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };

    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
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

        <div style={{ display: "flex", alignItems: "center" }}>
          <CiCirclePlus
            onClick={increment}
            style={{ fontSize: "40px", marginRight: "15px" }}
          />
          <span style={{ fontSize: "35px" }}>{count}</span>
          <CiCircleMinus
            onClick={decrement}
            style={{ fontSize: "40px", marginLeft: "15px" }}
          />
        </div>

        <div>
          <button
            onClick={addBasket}
            style={{
              marginTop: "25px",
              border: "none",
              padding: "10px",
              backgroundColor: "rgb(185,76,76)",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
