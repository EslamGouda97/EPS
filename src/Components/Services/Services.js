import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  {services} from '../../Shared/Data/data';
import ServicesCard from '../../Shared/serviceCard/ServiceCard';


function Services() {
  return (
    <Container className="services-page">
      <Row>
        <Col className='services'>
          <h2>Our Services</h2>
          <p>We offer a range of services to meet the needs of our customers. Our services include:</p>
        </Col>
      </Row>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.title}>
            <ServicesCard title={service.title} description={service.desc} image={service.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;