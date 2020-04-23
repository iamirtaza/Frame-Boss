
import React from 'react';
import { Row, Col, Menu, Dropdown, Input, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Search } = Input;

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Row className="footer-container">
                    <Col className="footer-section" lg={8} md={8} xs={24} sm={24}>
                        <div style={{ display: 'flex' }}>
                            <p>Get The App</p>
                            <a>
                                <img
                                    style={{ marginLeft: '10px' }}
                                    className="social-icon-facebook"
                                    src={require('../../Assets/Icons/apple.svg')} />
                            </a>
                        </div>

                        <p>Follow Us</p>
                        <div >
                            <a><img className="social-icon-facebook" src={require('../../Assets/Icons/facebook-letter-logo.svg')} /></a>
                            <a><img className="social-icons" src={require('../../Assets/Icons/twitter-black-shape.svg')} /></a>
                            <a><img className="social-icons" src={require('../../Assets/Icons/insta-icon.svg')} /></a>
                        </div>
                        <br /><br />
                        <p>Get Inspiration</p>
                        <div className="get-inspiration" >
                            <Input placeholder="Enter Your Email" />
                            <Button>Submit</Button>
                        </div>
                    </Col>
                    <Col className="footer-section" lg={3} md={6} xs={12} sm={12}>
                        <a><p>How It Works</p></a>
                        <a><p>Press</p></a>
                        <a><p>For Art & Trade</p></a>
                        <a><p>The Shop</p></a>
                    </Col>
                    <Col className="footer-section" lg={3} md={6} xs={12} sm={12}>
                        <a><p>FAQ</p></a>
                        <a><p>For Buisness</p></a>
                        <a><p>Company</p></a>
                        <a><p>Careers</p></a>
                    </Col>
                    <Col className="footer-section" lg={3} md={4} xs={12} sm={12}>
                        <a><p>Stores</p></a>
                        <a><p>Pricing</p></a>
                        <a><p>Reviews</p></a>
                        <a><p>Design Services</p></a>
                    </Col>
                    <Col className="footer-section" lg={3} md={6} xs={12} sm={12}>
                        <a><p>About Us</p></a>
                        <a><p>Gift Card</p></a>
                        <a><p>Contact Us</p></a>
                    </Col>
                    <Col className="footer-section" lg={3} md={6} xs={12} sm={12}>
                        <a><p>Terms Of Service</p></a>
                        <a><p>Privacy Policy</p></a>
                        <a><p>Accessibility</p></a>
                        <a><p>Sitemap</p></a>
                    </Col>
                </Row>
                <br />
                <Row className="footer-credits" >
                    <Col span={24}>
                        <center><p>© 2020 index.</p></center>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;
