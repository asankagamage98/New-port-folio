import React from 'react'
import "../assets/css/home.css"
import "../assets/css/public.css"

import img from "../assets/Images/asanka1.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';

import { motion } from "framer-motion"

const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;

export default function Home() {

    const navigate = useNavigate();

    const  onClickBtn =(e) => {
        navigate(`/viewCv`)
      }

const containervarints ={
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay:0.7,
            duration: 1.5,
        },
    },
    exit: {
         x:'-100vw',
        transition: {ease: 'easeInOut'}
    }
}


  return ( 
        <motion.Row 
            variants={containervarints}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="d-flex"
        >
        <Row>
            <Col className=''  lg={7} md={12}>
                <div className=' ps-5'>
            
                    <div  className='titles'>
                        
                            <p className='p1'> Hello, It's me</p>
                            <p className= 'p2'>Asanka Gamage</p>
                            <p  className= 'p3' >And I'am a  <span style={{ color: primaryColor}}>FullStack Developer</span> </p>
                       
                        <p className='p4'>Graduated BSc.(Hons) Information Technology  Specializing  Information<br/> Technology at  SLIIT.</p>
                    </div>
                    <div className="wrapper_second">
                        <ul className="dynamic-txts">
                        <li><span>Mobile app Developer</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Web application Developer</span></li>
                        <li><span>Software Developer</span></li>
                        </ul>
                    </div>
                    
                        <div  >
                            <button type="button" onClick={onClickBtn} className='primaryBtm'>View CV</button>
                        </div>
                   
                </div>
            </Col> 
             <Col className='text-center' lg={5} md={12}>
                <div className='zoom-wrapper p-0 m-0'>
                    <img src={img}  className=' background-image ' />
                </div>
               
            </Col>
        </Row>
        </motion.Row>
      
   
    
  )
}
