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
            className='box1 Projectcard zoom-wrapper'
            onClick={() => handleCardClick(item)}
          >
            <Card.Img variant="top" className='' src={item.image} style={{ height: "200px" }} />
            <Card.Body
              style={{ color: "", backgroundColor: "", fontWeight: "bolder", zIndex: "1000", backgroundColor: "#ffff" }}
            >
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
