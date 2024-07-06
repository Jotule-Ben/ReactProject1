import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <p>
        {" "}
        <Link to="/">Home</Link> / <Link to="/Shop">Baby</Link>
      </p>
    </div>
  );
};

export default ProductDetail;
