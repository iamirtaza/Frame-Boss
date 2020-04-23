
import React from 'react';
import { Row, Col } from 'antd'
import SectionHeading from '../SectionHeading'
import work1 from '../../../Assets/Images/work1.png'
import work2 from '../../../Assets/Images/work2.png'
import work3 from '../../../Assets/Images/work3.png'
import work4 from '../../../Assets/Images/work4.png'
import 'antd/dist/antd.css';

class Section4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="section-4 container">
                <SectionHeading
                    headingName={"Our Impressive Works"}
                    subText={"Design a custom frame for photos, art, and more."} />
                <Row>
                    <Col lg={12} xs={24} sm={24} >
                        <div className="img-hover-zoom" >
                            <img src={work1} />
                            <div className="overlay" >
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} xs={24} sm={24} >
                        <Row>
                            <Col span={12}>
                                <div className="top-image" >
                                    <img src={work3} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="top-image" >
                                    <img src={work2} />
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="bottom-image" >
                                    <img src={work4} />
                                    <div className="overlay" >
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Section4;
