
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import StartFramingButton from '../../Buttons/StartFraming'
import Background from '../../../Assets/Images/section1-img.png'
import 'antd/dist/antd.css';

class Section1 extends React.Component {
    render() {
        return (
            <div className="section-1">
                <Row className="container" >
                    <Col xl={12} lg={12} md={0} sm={0} xs={0}>
                        <img 
                        style=
                        {{
                             height: '430px', width: '90%' 
                        }}
                        src={Background} />
                    </Col>

                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                        <h1>A New Approach to <br /> Custom Frame</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="social-text" >
                            Facebook&nbsp;&nbsp;&nbsp;Instagram&nbsp;&nbsp;&nbsp;Twitter
                        </p>
                        <StartFramingButton text={"Start Framing"} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Section1;
