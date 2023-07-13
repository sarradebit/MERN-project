import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
export default function App() {
  return (
   <div>
   <br/>
   <br/>
   <h1 style={{color:'rgb(205,92,92)   '}}>Welcome!</h1>
    <div style={{ display: 'block', marginLeft:'15rem' , marginTop:'1rem' , width: 1000, padding: 30 }}>
      
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://images.pexels.com/photos/2879812/pexels-photo-2879812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://images.pexels.com/photos/699963/pexels-photo-699963.jpeg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}