import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/cards/ProjectCard';
import { ProjectList } from '../dummyData';


//get anv data
const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;

export default function Projects() {

 const[acadmicProjects, setacadmicProjects] = useState();


 const btnHandlerIn = () =>{
   
  // Filter projects where the type is "industry"
  const academicProjects = ProjectList.filter(project => project.type === "industry");
  // Update state or perform other actions with the filtered projects
  setacadmicProjects(academicProjects);

 }

 const btnHandlerAc = () =>{

 // Filter projects where the type is "industry"
 const academicProjects = ProjectList.filter(project => project.type === "academic");
 // Update state or perform other actions with the filtered projects
 setacadmicProjects(academicProjects);




 }


  return (
    <Container>
      <Row>
        <Col lg={12} className=' ps-5'>
          <p style={{ color: primaryColor }} className='mainTopics'>  Projects</p>
        </Col>
      </Row>
      
       <Row>
        <Col lg={12}>
            <div className='text-center pb-3'>
                <button type="button " onClick={btnHandlerAc} className='primaryBtm '>Acadamic</button>
                <button type="button " onClick={btnHandlerIn} className='primaryBtm ms-2'>Other</button>
            </div>
          </Col>
      </Row>
      <Row className='pb-3 vh-100 projectCrads' lg={12} >
        <Col className='d-flex justify-content-center gap-4 flex-wrap pt-2    ' >
            <ProjectCard acadmicProjects={acadmicProjects}/>
        </Col> 
      </Row>
      
    </Container>
  )
}
