import React from 'react'
import Card from 'react-bootstrap/Card';
import { ProjectList } from '../../dummyData';

export default function ProjectCard() {
  return (
   <>
    

      {ProjectList ?.map((item, idx) => (
        <Card className='box1 Projectcard'>
        <Card.Img variant="top" src={item.image} style={{ height:"200px" }}/>
        <Card.Body style={{color:"",backgroundColor:"",fontWeight:"bolder"  }} >
          <Card.Text className='text-center' >
            {item.name}
          </Card.Text>
        </Card.Body>
      </Card>
      ))};

   </>
  )
}
