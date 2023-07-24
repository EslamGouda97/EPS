import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBarstyle.css';
import image from'../../Assets/epslogo.png'

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(true);
  };
  const handleClickNav = () => {
    setShowNav(false);
  };

  const[bgcolor,setColor]=useState(false);

  const changeColor=()=>{
    if(window.scrollY >=100){
      setColor(true)
    }else{setColor(false)}
  }
  window.addEventListener('scroll',changeColor)

  return (
    <>
      <Navbar  expand="md" fixed="top" className={bgcolor?'text-center navbar-nav2' :'text-center navbar-nav '}>
        <Container >
          <Navbar.Brand as={Link} to="/">
            <img
              src={image}
              height="80"
              width='135'
              className="d-inline-block align-top px-4"
              alt="Logo"
            />

          </Navbar.Brand>
          <Navbar.Toggle onClick={handleToggleNav}>
            {showNav===true ? <FaBars style={{color:"white"}}/>:<FaTimes style={{color:"white"}} />}
          </Navbar.Toggle>
          <Navbar.Collapse className={showNav ? ' justify-content-end ' : ' justify-content-end show'}>
            <Nav className="ml-auto">
              <Nav.Link as={Link} className='mx-3' onClick={handleClickNav} to="/">Home</Nav.Link>
              <Nav.Link as={Link} className='mx-3' onClick={handleClickNav} to="aboutUs" >About</Nav.Link>
              <Nav.Link as={Link} className='mx-3' onClick={handleClickNav}  to="services">Services</Nav.Link>
              <Nav.Link as={Link} className='mx-3' onClick={handleClickNav}to="Projects" >Projects</Nav.Link>
              <Nav.Link as={Link} className='mx-3' onClick={handleClickNav} to="contact" >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
