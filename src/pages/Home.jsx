import React from 'react'
import "../assets/css/home.css"
import "../assets/css/public.css"

import img from "../assets/Images/asanka1.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;



export default function Home() {

  return (
    <Container>
        <Row >
            <Col className=''  lg={7} md={12}>
                <div className=' ps-5'>
                    <div  className='titles'>
                        <p className='p1'> Hi, Looking for a  developer !</p>
                        <p  className='p2'>I am <span style={{ color: primaryColor }}>Asanka Madhushan Gamage.</span> </p>
                        <p className='p3'>Graduated BSc.(Hons) Information Technology  Specializing  Information<br/> Technology at  SLIIT.</p>
                    </div>
                    <div className="wrapper_second">
                        <ul className="dynamic-txts">
                        <li><span>Mobile app Developer</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Web application Developer</span></li>
                        <li><span>Software Developer</span></li>
                        </ul>
                    </div>
                    <div className=''>
                         <button type="button " className='primaryBtm '>View CV</button>
                    </div>
                </div>
            </Col> 
             <Col className='text-center' lg={5} md={12}>
                <div className='zoom-wrapper p-0 m-0'>
                    <img src={img}  className=' background-image ' />
                </div>
               
            </Col>
        </Row>
    </Container>
  )
}
