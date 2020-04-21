
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import MainMenu from '../MainMenu'
import Background from '../../Assets/Images/section1-img.png'
import 'antd/dist/antd.css';

class Section1 extends React.Component {
    render() {
        return (
            <div className="section-1">
                <Row className="container" >
                    <Col span={12}>
                        <img style={{ height: '58%' }} src={Background} />
                    </Col>
                    <Col span={12}>
                        <h1>A New Approach to <br /> Custom Frame</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Button>Start Framing</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Section1;
