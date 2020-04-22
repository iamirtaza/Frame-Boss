
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons';
import SectionHeading from '../SectionHeading'
import img1 from '../../../Assets/Images/frame1.png'
import img2 from '../../../Assets/Images/frame2.png'
import img3 from '../../../Assets/Images/frame3.png'
import img4 from '../../../Assets/Images/frame4.png'
import img5 from '../../../Assets/Images/frame5.png'
import img6 from '../../../Assets/Images/frame6.png'
import 'antd/dist/antd.css';

class Section3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frameData: [
                {
                    name:'Dover',
                    src: img1
                },
                {
                    name:'Marquette',
                    src: img2
                },
                {
                    name:'Wren',
                    src: img3
                },
                {
                    name:'Mercer',
                    src: img4
                },
                {
                    name:'Everett',
                    src: img5
                },
                {
                    name:'Mandalay',
                    src: img6
                }
            ]
        }
    }
    render() {
        return (
            <div className="section-3 container">
                <SectionHeading headingName={"Feature Product"} subText={"Design a custom frame for photos, art, and more."} />
                <Row style={{ marginTop: '20px' }}>
                    <Col span={10}>
                        <div className="img-hover-zoom" >
                            <center><img src={require('../../../Assets/Images/section1-img.png')} /></center>
                            <div className="overlay" >
                            </div>
                        </div>
                    </Col>
                    <Col span={12} >
                        <Row>
                            {
                                this.state.frameData.map((item, index) => {
                                    return <Col span={8} >
                                        <div className="section3-frame" >
                                            <center><img src={item.src} /></center>
                                            <div class="section3-overlay">
                                            <HeartOutlined className="heart" />
                                                <Button>Start Framing</Button>
                                            </div>
                                        </div>
                                        <p className="frameName" >{item.name}</p>
                                    </Col>
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Section3;
