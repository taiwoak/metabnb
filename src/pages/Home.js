import React from 'react';
import Hero from '../components/Hero';
import Inspiration from '../components/Inspiration';
import NFT from '../components/NFT';
import Sponsor from '../components/Sponsor';

const Home = () => {
    return <div>
            <Hero /> 
            <Sponsor />
            <Inspiration />
            <NFT />      
        </div>;
};

export default Home;