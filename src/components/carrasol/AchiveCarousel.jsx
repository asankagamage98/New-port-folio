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
                    <img src={image1} alt="First slide" className="d-block w-100 " style={{ height:"430px"}}/>
                    <Carousel.Caption className='arosolTopicBody'  style={{ width: "100%", maxWidth: "100%",position: "absolute", bottom: "0", left: "0", padding: "20px"}} >
                        <h3>Graduation 2023 from SLIIT</h3>
                        <p>I am a passionate individual with a deep-rooted love for technology and innovation. Graduating with a Bachelor of Science (Hons) in Information Technology from the Sri Lanka Institute of Information Technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={image2} alt="second slide" className="d-block w-100 " style={{ height:"430px"}}/>
                <Carousel.Caption className='arosolTopicBody'  style={{ width: "100%", maxWidth: "100%",position: "absolute", bottom: "0", left: "0", padding: "20px"}} >
                    <h3>Designathon 2021</h3>
                    <p> Our Bug Predetor group selected for final battle arena of the "Designathon 2021"</p>
                </Carousel.Caption>
                </Carousel.Item>
               
           </Carousel>   
        </>
      
    );
  
  
}
