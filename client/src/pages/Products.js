import React from "react";
import Card from "../components/Card/productCard";

// view all products with ability to search by category, size, condition
const Products = () => {
  return (
    <div className="container place-content-center">
      <div className="flex flex-wrap flex-col ">
        <div className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Products;
