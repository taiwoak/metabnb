import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Wallet from './Wallet';
import './Home.css';


const MainNav = () => {

    const [openWallet, setOpenWallet] = useState(false)

    return <Navbar collapseOnSelect expand="lg" className="Nav-bar">
    <Container>
      <Navbar.Brand href="/metabnb">
            <img
              src= {process.env.PUBLIC_URL + "/Group.png" } 
              id="nav-image"
              className="d-inline-block align-top"
              alt="Metabnb Logo"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto d-flex justify-center align-center">
          <Nav.Link href="/metabnb" className="nav-item mx-lg-2">Home</Nav.Link>
          <Nav.Link href="/metabnb/places" className="nav-item mx-lg-2">Place to stay</Nav.Link>
          <Nav.Link href="/metabnb" className="nav-item mx-lg-2">NFTs</Nav.Link>
          <Nav.Link href="/metabnb" className="nav-item">Community</Nav.Link>
        </Nav>
        <button className="nav-button" onClick={() => setOpenWallet(true)}>Connect wallet</button>
        <Wallet open={openWallet} onClose={()=> setOpenWallet(false)} />
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default MainNav;