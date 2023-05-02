import { useState } from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";

function Error404() {
  const second_color = "#F6F1F1";
  const second_text_color = "#146C94";
  return (
    <>
      <div
        style={{
          fontFamily: "ZenOldMincho-Regular",
        }}
        className="p-2 gap-3">
        <Row className="d-flex justify-content-center ">
          <Col xs="auto">
            <br></br>
            <br></br>

            <Card
              style={{
                backgroundColor: second_color,
                color: second_text_color,
                minWidth: 330,
              }}
              className="p-2 gap-3">
              <h1 className="d-flex justify-content-center ">Error 404</h1>
              <p className="d-flex justify-content-center ">Page not found! </p>
              <div className="d-flex justify-content-center ">
                <Button href="/" variant={"info"}>
                  MainPage
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs="auto">
            <div>
              <Image src="cheems.png" className="img-fluid" fluid rounded />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Error404;
