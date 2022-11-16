import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Hero = () => {
    return <Container>
        <div className="d-md-flex flex-md-row align-items-md-center justify-content-center" id='hero-container'>
            <div className='hero-section'>
                <h1>Rent a <span className='hero-span-h1'>Place</span> away from <span className='hero-span-h1'>Home</span> in the <span className='hero-span-h1'>Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <span id='hero-search'>
                    <input type="text" name="text" className="" id='hero-input' placeholder='Search for location' />
                    <button id='hero-button'>Search</button> 
                </span>
            </div>
            <div id='hero-image-sec'>
                <img
                src= {process.env.PUBLIC_URL + "/Group4028.png" } 
                alt="Metabnb Logo"
                id='hero-image'
                />
            </div>
        </div>
    </Container>;
};

export default Hero;