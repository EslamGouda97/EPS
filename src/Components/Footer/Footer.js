import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3} className="mt-5">
            <h5>About Us</h5>
            <p>We are a leading provider of electrical testing and measurements services.</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="mt-5">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>Residual current Device testing</li>
              <li>Capacitor bank test</li>
              <li>Thermal Survey</li>
              <li>Power quality study</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3} className="mt-5">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon className="mx-2" icon={faMapMarkerAlt} />
                <span className="ml-4">St 20, Mokattam, Cairo ,Egypt</span>
              </li>
              <li>
                <FontAwesomeIcon className="mx-2" icon={faPhone} />
                <span className="ml-4">+201154773599</span>
              </li>
              <li>
                <FontAwesomeIcon className="mx-2" icon={faEnvelope} />
                <span className="ml-4">info@eps.com.eg</span>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3} className="mt-5">
  <h3>Follow Us</h3>
  <div className="icon-row mt-2">
    <a href="https://www.facebook.com/ElmasryHosary" className="icon-link"><FontAwesomeIcon icon={faFacebook} className="icon mx-2" size="2x" /></a> 
    <a href="https://twitter.com/" className="icon-link"><FontAwesomeIcon icon={faTwitter} className="icon  mx-2" size="2x" /></a> 
    <a href="https://www.instagram.com/" className="icon-link"><FontAwesomeIcon icon={faInstagram} className="icon  mx-2" size="2x" /></a>
  </div>
</Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Electric Utility Provider Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;