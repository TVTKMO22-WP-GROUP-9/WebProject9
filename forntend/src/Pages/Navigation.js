import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const Navigation = () => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">WebProj9</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Visualization1">Visualization1</Nav.Link>
            <Nav.Link href="/Visualization2">Visualization2</Nav.Link>
            <Nav.Link href="/Visualization3">Visualization3</Nav.Link>
          </Nav>
          <Nav>
            {localStorage.getItem("token") ? (
              <>
                <Nav.Link href="/makeVisualization">Create</Nav.Link>
                <Nav.Link href="/myVisualizations">My Pages</Nav.Link>
                <Button variant="outline-light" href="/" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/registration">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
