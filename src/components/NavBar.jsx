import React ,{useState}from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';;
import "../../src/assets/css/public.css";
import "../../src/assets/css/navbar.css";
import SocialIcons from './SocialIcons';
import {useNavigate} from 'react-router-dom';

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;

export default function NavBar() {
const navigate = useNavigate();

const  onClickAbout =(e) => {
    navigate(`/about`)
}
const  onClickHome =(e) => {
  navigate(`/`)
}
const  onClickPro =(e) => {
  navigate(`/projects`)
}
const  onClickCont =(e) => {
  navigate(`/Contacts`)
}
const  onClickAchiev =(e) => {
  navigate(`/achieve`)
}


  return (
    <>
      <Navbar bg="" expand="md" variant="" className='row navbar m-0 '>
        <Container fluid>
          <div  className='col-lg-3  '>
            <Navbar.Brand href="#home" ></Navbar.Brand> 
            <Navbar.Toggle aria-controls="navbar" />
          </div>
          <Navbar.Collapse id="navbar" className='justify-content-center col-lg-6   '>
            <Nav className="ms-auto gap-3 ">
              <Nav.Link onClick={onClickHome} ><button type="button" size=""  className='btn'   >Home</button></Nav.Link>
              <Nav.Link onClick={onClickAbout}><button type="button" size="" className='btn'>About</button></Nav.Link>
              <Nav.Link onClick={onClickPro} ><button type="button" size="" className='btn'>Projects</button></Nav.Link>
              <Nav.Link onClick={onClickAchiev} ><button type="button" size="" className='btn'>Achievements</button></Nav.Link>
              <Nav.Link onClick={onClickCont}><button type="button" size="" className='btn'>Contacts</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='col-lg-3  d-flex justify-content-center'>
                <SocialIcons />        
          </div>
        </Container>
      </Navbar>
    </>
  )
}
