import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';;
import "../../src/assets/css/public.css";
import "../../src/assets/css/navbar.css";
import SocialIcons from './SocialIcons';

export default function NavBar() {
  return (
    <>
      <Navbar bg="" expand="md" variant="light" className='row '>
        <Container fluid>
          <div  className='col-lg-3  '>
            <Navbar.Brand href="#home" ></Navbar.Brand> 
            <Navbar.Toggle aria-controls="navbar" />
          </div>
          <Navbar.Collapse id="navbar" className='justify-content-center col-lg-6   '>
            <Nav className="ms-auto gap-3 ">
              <Nav.Link href="#home"><button type="button" size="" className='btn'>Home</button></Nav.Link>
              <Nav.Link href="#about"><button type="button" size="" className='btn'>About</button></Nav.Link>
              <Nav.Link href="#project"><button type="button" size="" className='btn'>Projects</button></Nav.Link>
              <Nav.Link href="#achiev"><button type="button" size="" className='btn'>Achievements</button></Nav.Link>
              <Nav.Link href="#contact"><button type="button" size="" className='btn'>Contacts</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='col-lg-3  d-flex justify-content-center'>
                <SocialIcons/>        
          </div>
        </Container>
      </Navbar>
    </>
  )
}
