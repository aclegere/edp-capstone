import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Navigator() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Men's Clothing</Nav.Link>
          <Nav.Link href="#link">Women's Clothing</Nav.Link>
          <Nav.Link href="#link">Unisex Clothing</Nav.Link>
          <Nav.Link href="#link">Accessories</Nav.Link>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigator;
