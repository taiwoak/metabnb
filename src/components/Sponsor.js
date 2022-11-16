import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Sponsor = () => {
    return <div className="d-flex flex-sm-row align-items-center justify-content-around" id='sponsor-container'>
        <img
              src= {process.env.PUBLIC_URL + "/Group59537.svg" } 
              id="mb-token"
              className="d-inline-block "
              alt="MBToken"
            />
        <img
              src= {process.env.PUBLIC_URL + "/Group4040.svg" } 
              id="meta-mask"
              className="d-inline-block "
              alt="METAMASK"
            />
        <img
              src= {process.env.PUBLIC_URL + "/Frame4041.svg" } 
              id="open-sea"
              className="d-inline-block "
              alt="OpenSea"
            />    
    </div>;
};

export default Sponsor;