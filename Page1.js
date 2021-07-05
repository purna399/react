import React from 'react'
import{Navbar,Nav,Container}  from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Page1() {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="card.js">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Card2.js">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Page1
