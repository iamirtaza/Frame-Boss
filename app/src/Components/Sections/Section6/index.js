
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import SectionHeading from '../SectionHeading'
import 'antd/dist/antd.css';
import ClientSlider from './ClientSlider/index'
class Section6 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="section-6 container">
                <SectionHeading headingName={"We Love Our Client"} subText={"Design a custom frame for photos, art, and more."} />
                <ClientSlider/>
            </div>
        )
    }
}

export default Section6;
