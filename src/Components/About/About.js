import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './about.css';
import image from'../../Assets/354574536_590904889570375_2943809260434498413_n.jpg'

function AboutPage() {
  return (
    
        <Container className="about-page ">
      <Row>
      <Col className='about'>
          <h2 className='mt-5  mx-3'>About Us</h2>
          <p className='my-4 mx-3'>At Electrical Testing & Measurements, we are dedicated to providing reliable and efficient electric utility services to our clients. We understand the critical role that electricity plays in our daily lives, and we are committed to ensuring that our clients have access to safe and dependable power,As a responsible corporate citizen, we are committed to minimizing our environmental footprint. We take a proactive approach to reducing waste and conserving energy, and we strive to promote sustainable practices in all aspects of our business,At Electrical Testing & Measurements, we believe that our success is closely tied to the success of our clients. We are dedicated to building long-term relationships based on trust, integrity, and mutual respect. Whether you are a small business or a large utility company, we are here to provide you with the reliable and efficient electrical services you need to succeed.</p>
        </Col>
        <Col md={4}>
          <Card className='my-4'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mohamad Kamal Elhosary</Card.Title>
              <h4>CEO & Founder</h4>

              <Card.Text>
              Mohamad is the founder and CEO of our company. He has over 12 years of experience in electrical power testing and has worked with some of the largest companies in the industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
       
      </Row>
    </Container>
    
  
  );
}

export default AboutPage;