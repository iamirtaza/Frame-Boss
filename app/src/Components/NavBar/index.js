
import React from 'react';
import { Row, Col, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import MainMenu from '../MainMenu'
import 'antd/dist/antd.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <Row className="container" >
                    <Col span={8}><p className="brand-logo" >INDEX.</p></Col>
                    <Col span={10}>
                        <MainMenu/>
                    </Col>
                    <Col span={6}> <div className="nav-icons" > <img className="account-icon" src={require('../../Assets/Icons/user-account-icon.svg')} /> <img className="cart-icon" src={require('../../Assets/Icons/cart-icon.svg')} /> </div> </Col>
                </Row>
            </div>
        )
    }
}

export default NavBar;
