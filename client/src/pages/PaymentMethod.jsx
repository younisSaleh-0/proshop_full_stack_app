import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

import { savePaymentMethod } from "../features/actions/cartActions";

const PaymentMethod = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  console.log(cart);

  const [payMethod, setPayMethod] = useState("PayPal");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(payMethod));

    navigate("/placeOrder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-4">
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="payMethod"
              value="PayPal"
              checked
              onChange={(e) => setPayMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Strip"
              id="Strip"
              name="payMethod"
              value="Strip"
              onChange={(e) => setPayMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentMethod;
