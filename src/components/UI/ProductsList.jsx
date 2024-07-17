import React from "react";
import ProductCard from "./ProductCard";
import { Row } from "reactstrap";

const ProductsList = ({ data }) => {
  return (
    <div>
      <Row>
        {data?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
