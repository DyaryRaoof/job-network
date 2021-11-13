import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => (
  <header className="border-bottom">
    <Navbar bg="white" expand="lg">
      <Container fluid="md">
        <Navbar.Brand href="#">Job Network</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link>STARTUP JOBS</Nav.Link>
            <Nav.Link>HELP</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <AiOutlineSearch className="fs-1" />
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
          <Button variant="outline-info">Sign in</Button>
          <Button variant="outline-info">Sign up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
