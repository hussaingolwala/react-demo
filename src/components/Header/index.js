import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Connect</Nav.Link>
            <Nav.Link href="#link">Wallet</Nav.Link>
            <Nav.Link href="#link">Button</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Roadmap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Litepaper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gitbook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Governance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Solvable Problems</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">FAQ's</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
