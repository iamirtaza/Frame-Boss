
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import SectionHeading from '../SectionHeading'
import icon1 from '../../../Assets/Icons/free-shipping-icon.svg'
import icon2 from '../../../Assets/Icons/designer-advice-icon.svg'
import icon3 from '../../../Assets/Icons/price-icon.svg'
import icon4 from '../../../Assets/Icons/free-return-icon.svg'
import WhyChooseUs from './whyChooseUs'
import StartFramingButton from '../../Buttons/StartFraming'
import 'antd/dist/antd.css';

class Section5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row className="container section-5" >
                <Col span={14}>
                    <h2>Why choose us</h2>
                    <p>
                        Our countless frame types are loved by global frame lovers, due to the variety, quality yet simplicity.
                  </p>
                    <Row>
                        <Col span={12} >
                            <WhyChooseUs
                                icon={icon1}
                                heading={"Free Shipping"}
                                subText={"you're here to buy art, not cardboard boxes."} />
                        </Col>
                        <Col span={12}>
                            <WhyChooseUs
                                icon={icon2}
                                heading={"Free Design Advice"}
                                subText={"you're here to buy art, not cardboard boxes."} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={12} >
                            <WhyChooseUs
                                icon={icon3}
                                heading={"Everyday Low Price"}
                                subText={"you're here to buy art, not cardboard boxes."} />
                        </Col>
                        <Col span={12}>
                            <WhyChooseUs
                                icon={icon4}
                                heading={"Free Returns"}
                                subText={"don't adore it? return it for free within 45 days."} />
                        </Col>
                    </Row>
                    <StartFramingButton text={"Start Framing"} />
                </Col>
                <Col span={10}>
                    <div class="parent">
                        <img class="image1" src={require('../../../Assets/Icons/back-frame.svg')} />
                        <img class="image2" src={require('../../../Assets/Images/frame-front.png')} />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Section5;
