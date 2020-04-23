
import React from 'react';
import { Row, Col } from 'antd'
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
                    <center><img src={require('../../../Assets/Icons/seperator.svg')} />
                    <p>{this.props.subText}</p>
                    </center>
                    
                </Col>
            </Row>
        )
    }
}

export default SectionHeading;
