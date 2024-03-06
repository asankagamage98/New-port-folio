import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import img from '../assets/Images/contact.jpeg'
import MailCard from '../components/cards/MailCard';

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;


export default function Contacts() {


  return (
   <Container>
    <Row>
      <Col lg={12} className='pt-3 ps-5'>
          <h1  style={{ color: primaryColor }}>Contact me</h1>
          
      </Col>
      <Col lg={5} className='ps-5 mt-4 pb-3'>
            <MailCard/>
      </Col>
      <Col lg={7}>
          <div className='zoom-wrapper d-flex justify-content-center '>
                    <img src={img}  className='contact' />
          </div>
      </Col>
    </Row>
    
   </Container>
  )
}
