import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Footer = () => {
    return<div className="d-md-flex flex-md-row align-items-md-start justify-content-md-around" id='footer-container'>
        <div className='footer-div1'>
           <img
            src= {process.env.PUBLIC_URL + "/Group.svg" } 
            alt="Metabnb Logo"
            id='footer-metabnb'
            />
            <span className="d-flex flex-row align-items-center justify-content-start footer-span">
                <a href='/metabnb'><img
                src= {process.env.PUBLIC_URL + "/facebook-263-721950.png" } 
                alt="Facebook"
                id='facebook'
                /></a>
                <a href='/metabnb'><img
                src= {process.env.PUBLIC_URL + "/instagram-216-721958.png" } 
                alt="Instagram"
                id='instagram'
                /></a>
                <a href='/metabnb'><img
                src= {process.env.PUBLIC_URL + "/twitter-241-721979.png" } 
                alt="Twitter"
                id='twitter'
                /></a>
            </span>
            <p className='footer-div1p'>© 2022 Metabnb</p>
        </div>
        <div className='footer-div2'>
            <a href='/metabnb'><h3>Community</h3></a>
            <a href='/metabnb'><p>NFT</p></a>
            <a href='/metabnb'><p>Tokens</p></a>
            <a href='/metabnb'><p>Landlords</p></a>
            <a href='/metabnb'><p>Discord</p></a>
        </div>
        <div className='footer-div2'>
            <a href='/metabnb/places'><h3>Places</h3></a>
            <a href='/metabnb/places'><p>Castle</p></a>
            <a href='/metabnb/places'><p>Farms</p></a>
            <a href='/metabnb/places'><p>Beach</p></a>
            <a href='/metabnb'><p>Learn more</p></a>
        </div>
        <div className='footer-div2'>
            <a href='/metabnb'><h3>About us</h3></a>
            <a href='/metabnb'><p>Roadmap</p></a>
            <a href='/metabnb'><p>Creators</p></a>
            <a href='/metabnb'><p>Career</p></a>
            <a href='/metabnb'><p>Contact us</p></a>
        </div>
    </div>;
};

export default Footer;