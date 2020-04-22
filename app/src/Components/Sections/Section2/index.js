
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import SectionHeading from '../SectionHeading'
import img1 from '../../../Assets/Images/section2-img1.png'
import img2 from '../../../Assets/Images/section2-img2.png'
import img3 from '../../../Assets/Images/section2-img3.png'
import img4 from '../../../Assets/Images/section2-img4.png'
import img5 from '../../../Assets/Images/section2-img5.png'
import img6 from '../../../Assets/Images/section2-img6.png'
import 'antd/dist/antd.css';

class Section2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frameData: [
                {
                    name:'Original Art',
                    src: img1
                },
                {
                    name:'Object',
                    src: img2
                },
                {
                    name:'Textile',
                    src: img3
                },
                {
                    name:'Jersey',
                    src: img4
                },
                {
                    name:'photography',
                    src: img5
                },
                {
                    name:'Something esle',
                    src: img6
                }
            ]
        }
    }
    render() {
        return (
            <div className="section-2 container">
                <SectionHeading headingName={"What Are You Framing?"} subText={"Design a custom frame for photos, art, and more."} />
                <Row>
                   {
                       this.state.frameData.map(item=>{
                           return  <Col span={4} >
                           <div className="frame" >
                               <center><img src={item.src} /></center>
                               <div class="middle">
                                   <Button>Frame <br/>Now</Button>
                               </div>
                           </div>
                          <p className="frameName" >{item.name}</p>
                       </Col>
                       })
                   }
                </Row>
            </div>
        )
    }
}

export default Section2;
