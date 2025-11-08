import Carousel from 'react-bootstrap/Carousel';

import adBanner1 from '/Img/ad1.jpg'; 
import adBanner2 from '/Img/ad2.jpg'; 
import adBanner3 from '/Img/ad3.jpg'; 


import './Ad.css'
function Adcarousel() {
  return (
    <Carousel className='mt-5 pt-5' prevIcon = {null} nextIcon = {null}>
      
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src={adBanner1}
          alt="First ad slide"
        />
     
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src={adBanner2}
          alt="Second ad slide"
        />
      
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src={adBanner3}
          alt="Third ad slide"
        />
     
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Adcarousel;