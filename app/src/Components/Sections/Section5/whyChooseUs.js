
import React from 'react';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';

class WhyChooseUs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row className="whyChooseUs" >
                <Col span={6}>
                    <img style={{ height: '65px' }} src={this.props.icon} />
                </Col>
                <Col span={18}>
                    <p>{this.props.heading}
                        <p className="subText" >{this.props.subText}</p>
                    </p>
                </Col>
            </Row>
        )
    }
}

export default WhyChooseUs;
