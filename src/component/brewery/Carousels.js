import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Carousels = () => {

    const assignPic = (name) => {
        let picName = name + `${Math.floor(Math.random() * 23) + 1}`
        let pic = require(`../../photo/brewerycard/${picName}.jpg`)
        return pic
      }

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={assignPic('beer').default}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={assignPic('beer').default}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={assignPic('beer').default}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Carousels