import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectList } from '../../dummyData';
import ProjectModel from '../model/ProjectModel';

export default function ProjectCard({acadmicProjects = ProjectList}) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <>
      {acadmicProjects?.map((item, idx) => (
        <div key={item.id} style={{ overflow: "hidden", padding: "20px" }}>
          <Card
            className='box1 Projectcard1 zoom-wrapper d-none d-md-flex  flex-wrap justify-content-center m-0'
            onClick={() => handleCardClick(item)}
          >
            <Card.Img variant="top" className='' src={item.image} style={{ height: "200px" }} />
            <Card.Body
              className='cardbody'
            >
              <Card.Text className='text-center'>
                {item.name}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className='box1 Projectcard2 zoom-wrapper d-md-none d-sm-flex flex-wrap justify-content-center '
            onClick={() => handleCardClick(item)}
          >
            <Card.Img variant="top" className='' src={item.image} style={{ height: "200px" }} />
            <Card.Body
              className='cardbody'
            >
              <Card.Text className='text-center'>
                {item.name}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className='box1 Projectcard3 zoom-wrapper d-md-none d-sm-flex flex-wrap justify-content-center '
            onClick={() => handleCardClick(item)}
          >
            <Card.Img variant="top" className='' src={item.image} style={{ height: "200px" }} />
            <Card.Body className='cardbody'>
              <Card.Text className='text-center'>
                {item.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}

      <ProjectModel  item={selectedItem} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
