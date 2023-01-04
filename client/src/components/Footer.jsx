import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <footer>
          <Row>
            <Col className="text-center py-3">Copyright @ ProShot</Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
