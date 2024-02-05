import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/Images/caroselImages/graduate.jpg';
import image2 from '../../assets/Images/caroselImages/design.png';

// import { carasolImages } from '../../dummyData';


export default function AchiveCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
             <Carousel activeIndex={index} onSelect={handleSelect} className='carasoul' >
                <Carousel.Item >
                    <img src={image1} alt="First slide" className="d-block w-100" style={{ height:"350px"}}/>
                    <Carousel.Caption>
                        <h3>Graduation 2023 from SLIIT</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={image2} alt="second slide" className="d-block w-100" style={{ height:"350px"}}/>
                <Carousel.Caption>
                    <h3>Designathon 2021</h3>
                    <p> Our Bug Predetor group selected for final battle arena of the "Designathon 2021"</p>
                </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                <img src={image1} alt="third slide" className="d-block w-100" style={{ height:"520px"}} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item> */}
           </Carousel>   
        </>
      
    );
  
  
}
