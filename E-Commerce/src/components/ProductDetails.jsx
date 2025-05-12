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

  return <div>{title}</div>;
}

export default ProductDetails;
