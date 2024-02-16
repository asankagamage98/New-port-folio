import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import MailCard from '../components/cards/MailCard';

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;


export default function Contacts() {
  return (
   <Container>
    <Row>
      <Col lg={12} className='pt-3 ps-5'>
          <h1  style={{ color: primaryColor }}>Contact me</h1>
          
      </Col>
      <Col lg={6} className='ps-5'>
            <MailCard/>
      </Col>
      <Col lg={6}>
            
      </Col>
    </Row>
    {/* <Row>
      <Col lg={6}>
        
      </Col>
      <Col lg={6} className='ps-5 pe-5'>
         
      </Col>
    </Row> */}
   </Container>
  )
}
