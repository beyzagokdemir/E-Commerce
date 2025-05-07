import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return <div>ProductList</div>;
}

export default ProductList;
