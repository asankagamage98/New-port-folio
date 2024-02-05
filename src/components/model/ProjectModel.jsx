import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

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
                <Row>
                   <Col lg={12}>
                    <p>
                        {props.item?.description}
                    </p>
                   </Col>
                </Row>
                <Row>
                   <Col lg={12}>
                      <h5>Use Technologies</h5>
                      <p>
                         {props.item?.technology}
                      </p>
                   </Col>
                </Row>
                
                
            </Modal.Body>


            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        
      </Modal>
    );
  }