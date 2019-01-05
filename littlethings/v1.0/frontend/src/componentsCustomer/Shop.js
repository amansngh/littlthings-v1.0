import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import pic1 from './pics/pic1.png'

 
class Shop extends Component {
    render() {
        return (
            <div >
            <Carousel style={{height:'100%' , width:'100%'}}>
                <div>
                    <img src={pic1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={pic1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={pic1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default Shop ;