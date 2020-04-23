
import React from 'react';
import { Row } from 'antd'
import SectionHeading from '../SectionHeading'
import 'antd/dist/antd.css';
import ClientSlider from './ClientSlider/index'
import Client1 from '../../../Assets/Images/client1.png'
import Client2 from '../../../Assets/Images/client2.jpg'

class Section6 extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            clientReviews: [
                {
                    name: 'Jeremy Crouse',
                    comment: 'I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.',
                    clientCategory: 'Graphic Designer',
                    avatar: Client1
                },
                {
                    name: 'Shaun Marsh',
                    comment: 'I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.',
                    clientCategory: 'Web Designer',
                    avatar: Client2
                }
            ]
        }
    }
    render() {
        return (
            <div className="section-6 container">
                <SectionHeading
                headingName={"We Love Our Client"}
                subText={"Design a custom frame for photos, art, and more."} />
                <Row>
                    <ClientSlider data={this.state.clientReviews} />
                </Row>
            </div>
        )
    }
}

export default Section6;
