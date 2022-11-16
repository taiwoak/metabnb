import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const PlaceCard = () => {
    return <Container>
      <div className="d-md-flex flex-md-row align-items-md-start justify-content-md-around place-div1">
        <p id='place-div1p'>Restaurant</p>
        <p id='place-div1p'>Cottage</p>
        <p id='place-div1p'>Castle</p>
        <p id='place-div1p'>Fantast city</p>
        <p id='place-div1p'>Beach</p>
        <p id='place-div1p'>Cabins</p>
        <p id='place-div1p'>Off-grid</p>
        <p id='place-div1p'>Farm</p>
        <div className='place-div1a d-flex flex-row justify-content-between'>
            <p id='place-div1ap'>Location</p>
            <img
                src= {process.env.PUBLIC_URL + "/setting-5.svg" } 
                id="place-settings"
                className=""
                alt="Settings"
            />
        </div>
      </div>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame155.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-2'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame156.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-3'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame157.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-4'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame158.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
      </Row>
      <Row className='inspiration-row2'>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame151.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-6'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame152.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-7'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame153.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-8'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame154.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
      </Row>
      <Row className='inspiration-row2'>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame159.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-6'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame160.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-7'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame161.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-8'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame162.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
      </Row>
      <Row className='inspiration-row2 place-card-row'>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame163.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-6'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame164.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-7'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame165.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div className='card-container inspiration-container metabnb-8'>
            <img
                src= {process.env.PUBLIC_URL + "/Frame166.png" } 
                id="meta-img"
                className=""
                alt="Metaverse House"
                />
            <span className="d-flex flex-row justify-content-between card-span1">
                <p className='card-p'>Desert king</p>
                <h3 className='card-h3'>1MBT per night</h3>
            </span>
            <span className="d-flex flex-row justify-content-between card-span2">
                <p className='card-p2'>2345km away</p>
                <p className='card-p3'>available for 2weeks stay</p>
            </span>
            <img
                src= {process.env.PUBLIC_URL + "/Frame59528.png" } 
                id="five-stars"
                className=""
                alt="Five Stars"
                width="92px"
                height="12px"
                />
          </div>
        </Col>
      </Row>
    </Container>;
};

export default PlaceCard;