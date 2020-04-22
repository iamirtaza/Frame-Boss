
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
                    <Col span={12}>
                        <img style={{ height: '430px' }} src={Background} />
                    </Col>
                    <Col span={12}>
                        <h1>A New Approach to <br /> Custom Frame</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="social-text" >Facebook&nbsp;&nbsp;&nbsp;Instagram&nbsp;&nbsp;&nbsp;Twitter</p>
                       <StartFramingButton text={"Start Framing"}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Section1;
