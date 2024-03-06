import React from 'react'
import AchiveCarousel from '../components/carrasol/AchiveCarousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;

export default function Achievments() {
  return (
    <Container >
        <Row>
          <Col lg={12} className=' ps-5'>
            <p style={{ color: primaryColor }} className='mainTopics' >Achivements</p>
          </Col>
        </Row>
        <Row className=''>
          <Col lg={2}>
          </Col>
          <Col  lg={8} className='justify-content-center pt-1'>
              <AchiveCarousel/>
          </Col>
          <Col lg={2}>
          
          </Col>
        </Row>
    </Container>
  )
}
