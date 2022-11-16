import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const NFT = () => {
    return <div className="d-lg-flex flex-lg-row align-items-lg-center justify-content-center" id='nft-container'>
        <div className='nft-section'>
            <h1>Metabnb NFTs</h1>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button id='nft-button'>Learn More</button> 
        </div>
        <div id=''>
            <img
            src= {process.env.PUBLIC_URL + "/Frame59546.png" } 
            alt="Metabnb NFT"
            id='nft-img'
            />
        </div>
    </div>;
};

export default NFT;