import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import img from "../assets/Images/asanka2.png";
import "../assets/css/public.css"

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;


export default function About() {
  return (
    <Container>
      <Row>
          
          <Col lg={6} md={12} className=''>
                <Col lg={12} className='pt-4 ps-5'>
                    <h1 style={{ color: primaryColor }}>About me</h1>
                </Col>
                <Col lg={12} className='pt-3 ps-5'>
                  <div className="box1 p-5">
                      <p>
                        🚀 Full Stack Developer | JavaScript Enthusiast | BSc (Hons) in Information Technology

                        🎓 Proud graduate of SLIIT, specializing in Information Technology. I hold a BSc (Hons) degree, where I honed my skills and acquired a strong foundation in IT.

                        🛢️ During my academic journey, I completed a six-month internship as a Software Engineer Intern at Ceylon Petroleum Storage Terminals LTD. This invaluable experience allowed me to apply theoretical knowledge to real-world projects, shaping me into a versatile and hands-on developer.
                      </p>
                  </div>
                   
                </Col>
                
          </Col>
          <Col lg={6} md={12}  className='text-center'>
            
                <div className='zoom-wrapper '>
                    <img src={img}  className='about-image' />
                </div>
            
          </Col>

      </Row>
    </Container>
  )
}
