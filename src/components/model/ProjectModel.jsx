import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import "../../assets/css/projectModel.css";
import { FaLink } from 'react-icons/fa';

export default function ProjectModel(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.item?.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                     <img src={props.item?.image} alt="" srcset="" style={{ height:"200px", borderRadius:"30px" }}/>
                </Row>
                <Row>
                    <Col lg={12}>
                        <h5 className='mt-3'>Project Details</h5>
                    </Col>
                </Row>
                <Row className=''>
                   <Col lg={12} className="description-column">
                    <p>
                        {props.item?.description}
                    </p>
                   </Col>
                </Row>
                <Row>
                   <Col lg={4} className='mt-2'>
                      <h5>Use Technologies</h5>
                      <p>
                         {props.item?.technology}
                      </p>
                   </Col>
                   <Col lg={4} className='mt-2'>
                      <h5>Use Tools</h5>
                      <p>
                         {props.item?.tools}
                      </p>
                   </Col>
                   <Col lg={4} className='mt-2'>
                      <h5>Project Links</h5>
                     <Row className=' d-flex'>
                       <Col lg={6}>
                          Link one <a href={props.item?.gitLink.linkone}><FaLink className="ms-2" /></a>
                       </Col>
                       <Col lg={6}>
                          Link Two <a href={props.item?.gitLink.linktwo}><FaLink className="ms-2" /></a>
                       </Col>
                    </Row> 
                   </Col>
                </Row>
                
                
            </Modal.Body>


            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        
      </Modal>
    );
  }