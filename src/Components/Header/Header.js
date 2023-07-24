import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HeaderStyle.Module.css'
import image1 from'../../Assets/different-electrical-tools-wooden-background-flat-lay.jpg'
import image2 from'../../Assets/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg'
import image3 from'../../Assets/man-electrical-technician-working-switchboard-with-fuses-uses-tablet.jpg'
export default function Header() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
          />
          <Carousel.Caption  className="text-center  title ">
            <h1 className="font-weight-bold font-family-outfit mb-4 mb-md-5 title">Electrical Testing & Measurements</h1>
            <h2>Electric Utility Provider</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Second slide"
          />

          <Carousel.Caption className="text-center caption">
            <h3>Power Quality Testing & Measurements</h3>
            <p>Our Electrical Testing & Measurements ensure reliable performance</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption  className="text-center caption">
            <h3>Electrical Engineering Consulting Services.</h3>
            <p>
            We have years of experience in Electrical Testing & Measurements
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
