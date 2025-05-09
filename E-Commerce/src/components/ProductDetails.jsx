import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return <div>ProductDetails</div>;
}

export default ProductDetails;
