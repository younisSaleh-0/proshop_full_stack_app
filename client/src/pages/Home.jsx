import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3100/api/products`);

        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Products loading.....</p>;
  }

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
