import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img5 from '../webpage/3.jpg';
function Card2() {
    return (
        <>
        <Container>
          <Row>
              <Col>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img5} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="#">Go somewhere</Button>
 </Card.Body>
 </Card>
 </Col>
 <Col>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img5} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="#">Go somewhere</Button>
 </Card.Body>
 </Card>
 </Col>
 <Col>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img5} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="#">Go somewhere</Button>
 </Card.Body>
 </Card>
 </Col>
         
</Row>
</Container>
        </>
    )
}

export default Card2
