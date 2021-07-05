import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Card1 from '../components/webpage/Card1';
import Card2 from '../components/webpage/Card2';
import Page1 from '../components/webpage/Page1';
function Web() {
    return (
      <>
      <Container>
      <Row>
        <Col>
        <Page1/>
           </Col>
      </Row>
      <Row>
        <Col>
       <Card1/>
           </Col>
      </Row>
      <Row>
      <Col>
      <Card2/>
      </Col>
      </Row>
      <Row>
      <Col>
      <Card2/>
      </Col>
      </Row>
      <Row>
      <Col>
      <Card2/>
      </Col>
      </Row>
    </Container>
    </>
    )
};
export default Web
