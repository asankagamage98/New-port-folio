import React from 'react'
import "../assets/css/home.css"
import img from "../assets/Images/asanka1.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;



export default function Home() {

  console.log('Primary Color:', primaryColor);

  return (
    <Container>
        <Row >
            <Col className=''  lg={7} md={12}>
                <div className='row ms-5'>
                    <div  className='titles'>
                        <p className='p1'> Hi, Looking for a  developer !</p>
                        <p  className='p2'>I am <span style={{ color: primaryColor }}>Asanka Madhushan Gamage.</span> </p>
                        <p className='p3'>Graduated BSc.(Hons) Information Technology  Special  Information<br/> Technology at  SLIIT.</p>
                    </div>
                    <div class="wrapper_second">
                        <ul class="dynamic-txts">
                        <li><span>Mobile app Developer</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Web application Developer</span></li>
                        <li><span>Software Developer</span></li>
                        </ul>
                    </div>
                    <div>
                         <button type="button col-md-justify-content-center" className='primaryBtm '>View CV</button>
                    </div>
                </div>
            </Col> 

            {/* <Col className='p-0' lg={5} md={12}>
                <div className='m-0 p-0'>
                    <img src={img} alt="background" className="background-image "  />    
                </div>
            </Col> */}
             <Col  className='' lg={5} md={12}>
                <div className='zoom-wrapper'>
                    <img src={img}  className=' background-image ' />
                </div>
               
            </Col>
        </Row>
    </Container>
  )
}
