import Carousel from 'react-bootstrap/Carousel';
import two from '../images/2010-two.jpg';
import four from '../images/2010-four.jpg';
import tree from '../images/2010-tree.jpg';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h3>2010 - yilda tug'ilgan bolalar</h3>
            <p>O'zbekiston Kubogi 2 - o'rin sohibi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={four}
          alt="Third slide"
        />
        <Carousel.Caption>
            <h3>2010 - yilda tug'ilgan bolalar</h3>
            <p>O'zbekiston Kubogi 2 - o'rin sohibi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tree}
          alt="Third slide"
        />
        <Carousel.Caption>
            <h3>2010 - yilda tug'ilgan bolalar</h3>
            <p>O'zbekiston Kubogi 2 - o'rin sohibi</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;