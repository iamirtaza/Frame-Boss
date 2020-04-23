
import React from 'react';
import { Row, Col, Menu } from 'antd'
import MainMenu from '../MainMenu'
import ResponsiveNavBar from './responsive'
import 'antd/dist/antd.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Row className="container" >
          <Col lg={6} xs={12}>
            <p className="brand-logo" >INDEX.</p>
          </Col>

          <Col lg={12} xs={0}>
            <MainMenu />
          </Col>

          <Col lg={6} xs={12}>
            <div className="nav-icons" >
              <img className="account-icon" src={require('../../Assets/Icons/user-account-icon.svg')} /> 
              <img className="cart-icon" src={require('../../Assets/Icons/cart-icon.svg')} />
            </div> 
          </Col>
        </Row>
        
        <Row>
          <Col xl={0} md={24} lg={0} sm={24} xs={24}>
            <ResponsiveNavBar />
          </Col>
        </Row>
      </div>
    )
  }
}

export default NavBar;
