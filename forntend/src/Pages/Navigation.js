import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">WebProj9</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/HadcrutAnnual">HadcrutAnnual</Nav.Link>
            <Nav.Link href="/HadcrutMonthly">HadcrutMonthly</Nav.Link>
            <Nav.Link href="/Reconstruction">Reconstruction</Nav.Link>
            <Nav.Link href="/Icebergs">Icebergs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
