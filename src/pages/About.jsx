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
          
          <Col lg={8} md={12} className=''>
                
                <div  className='mt-5 ps-5'>
                
                  <div className="box1 p-4  mb-5" >
                      <p style={{ color: primaryColor,lineHeight:"40px" }} className='mainTopics' >About me</p>

                      <p className=''   > 
                      🚀 Dedicated Full Stack Developer with a passion for creating impactful 
                      digital experiences. Armed with a BSc (Hons) degree in Information 
                      Technology from SLIIT, I've honed my skills and embraced a continuous 
                      learning journey. During a transformative internship at Ceylon Petroleum 
                      Storage Terminals LTD, I gained hands-on experience as a Software Engineer
                       Intern, translating theory into practical solutions.<br/>

                      💻 Specializing in Laravel and proficient in JavaScript technologies 
                      like ReactJS, NodeJS, and VueJS, I bring a comprehensive approach to 
                      web development. Crafting clean and efficient code, I prioritize
                       user-centric design, ensuring seamless functionality. My commitment
                        extends beyond code, aiming to contribute positively to the ever-changing
                        tech landscape.<br/>

                      🌐 Whether it's developing robust web applications, designing
                       intuitive user interfaces, or exploring innovative solutions, 
                       I thrive on challenges. Eager to collaborate on exciting projects 
                       and engage with fellow tech enthusiasts, I'm open to new opportunities 
                       and discussions on tech, innovation, or potential collaborations.
                        Let's connect and explore the possibilities in the world of technology! 
                      </p>
                  </div>
                  
                </div>
                
          </Col>
          <Col lg={4} md={12}  className='text-center'>
            
                <div className='zoom-wrapper '>
                    <img src={img}  className='about-image' />
                </div>
            
          </Col>

      </Row>
    </Container>
  )
}
