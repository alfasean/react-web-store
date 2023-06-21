import Carousel from 'react-bootstrap/Carousel';
import slide1 from './../Assets/p3.webp'
import slide2 from './../Assets/p5.webp'
import slide3 from './../Assets/p2.png'
import slide4 from './../Assets/p4.webp'
import slide5 from './../Assets/p1.webp'

function Hero() {
  return (
    <Carousel className='container py-2'>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;