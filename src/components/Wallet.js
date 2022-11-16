import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Wallet = ({open, onClose}) => {

     if (!open) return null
    return (
        <div onClick={onClose} className='wallet-overlay d-flex flex-row align-items-center justify-content-center'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className='wallet-container'>
                <div className="d-flex flex-row justify-content-between wallet-div1">
                    <h1>Connect wallet</h1>
                    <img
                    src= {process.env.PUBLIC_URL + "/x.png" } 
                    alt="X"
                    id='wallet-x'
                    onClick={onClose}
                    />
                </div>
                <div className="wallet-hr"></div>
                <div className="wallet-div2 d-flex flex-column align-items-start justify-content-center">
                    <p>Choose your preferred wallet</p>
                    <div className='wallet-div2a d-flex flex-row align-items-center justify-content-between'>
                        <img
                        src= {process.env.PUBLIC_URL + "/Frame195.png" } 
                        alt="Metamask Logo"
                        id='wallet-meta'
                        />
                        <img
                        src= {process.env.PUBLIC_URL + "/arrow.png" } 
                        alt=">"
                        id='wallet-arrow'
                        />
                    </div>
                    <div className='wallet-div2b d-flex flex-row align-items-center justify-content-between'>
                        <img
                        src= {process.env.PUBLIC_URL + "/Frame196.png" } 
                        alt="WalletConnect Logo"
                        id='wallet-wall'
                        />
                        <img
                        src= {process.env.PUBLIC_URL + "/arrow.png" } 
                        alt=">"
                        id='wallet-arrow'
                        />
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Wallet;