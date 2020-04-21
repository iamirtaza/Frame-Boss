
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
                    <Col className="footer-section" span={8}>
                        <p>Get The App</p>
                        <p>Follow Us</p>
                        <div >
                            <img className="social-icon-facebook" src={require('../../Assets/Icons/facebook-letter-logo.svg')} />
                            <img className="social-icons" src={require('../../Assets/Icons/twitter-black-shape.svg')} />
                            <img className="social-icons" src={require('../../Assets/Icons/insta-icon.svg')} />
                        </div>
                        <br /><br />
                        <p>Get Inspiration</p>
                        <div className="get-inspiration" >
                        <Input placeholder="Enter Your Email" />
                        <Button>Submit</Button>
                        </div>
                    </Col>
                    <Col className="footer-section" span={3}>
                        <p>How It Works</p>
                        <p>Press</p>
                        <p>For Art & Trade</p>
                        <p>The Shop</p>
                    </Col>
                    <Col className="footer-section" span={3}>
                        <p>FAQ</p>
                        <p>For Buisness</p>
                        <p>Company</p>
                        <p>Careers</p>
                    </Col>
                    <Col className="footer-section" span={3}>
                        <p>Stores</p>
                        <p>Pricing</p>
                        <p>Reviews</p>
                        <p>Design Services</p>
                    </Col>
                    <Col className="footer-section" span={3}>
                        <p>About Us</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col className="footer-section" span={3}>
                        <p>Terms Of Service</p>
                        <p>Privacy Policy</p>
                        <p>Accessibility</p>
                        <p>Sitemap</p>
                    </Col>
                </Row>
                <br/>
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
