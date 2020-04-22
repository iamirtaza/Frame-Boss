
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class SectionHeading extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                <Col className="section-heading" span={24} >
                    <h2>{this.props.headingName}</h2>
                    <center><img src={require('../../../Assets/Icons/seperator.svg')} /></center>
                    <p>{this.props.subText}</p>
                </Col>
            </Row>
        )
    }
}

export default SectionHeading;
