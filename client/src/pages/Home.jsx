import React from "react";
import products from "../products_and_images/products";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
//  {}

const Home = () => {
  return (
    <>
      <h1>Latest products </h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} l={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
