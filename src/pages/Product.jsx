import React from "react";
import { useParams } from "react-router";
const Product = () => {
  const { id } = useParams();
  return <h2>product {id}</h2>;
};

export default Product;
