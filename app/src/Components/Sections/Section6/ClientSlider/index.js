import React from 'react';
import { Row, Col } from 'antd'
import './style.css'


var slideIndex = 1;


class ClientSlider extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.showSlides(slideIndex);
    }

    plusSlides = (n) => {
        this.showSlides(slideIndex += n);
    }

    showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    render() {
        return (
            <div>
                <div className="slideshow-container">
                    {
                        this.props.data.map(item => {
                            return <div className="mySlides fade">
                                <Row>
                                    <Col lg={7} md={12} xs={24} sm={24} >
                                        <div class="parent">
                                            <img class="image1" src={require('../../../../Assets/Icons/back-frame.svg')} />
                                            <img class="image2" src={item.avatar} />
                                        </div>
                                    </Col>
                                    <Col className="client-review" lg={15} md={12} xs={24} sm={24} >
                                        <p className="client-name" >{item.name}</p>
                                        <span className="client-category" >({item.clientCategory})</span>
                                        <br /><br />
                                        <div style={{ display: 'flex' }} >
                                            <img style={{ height: '15px' }} src={require('../../../../Assets/Icons/left-qoute.svg')} />
                                            <p className="client-comment">
                                                {item.comment}
                                                <img style={{ height: '15px', marginLeft: '10px', marginTop: '10px' }} src={require('../../../../Assets/Icons/right-qoute.svg')} />
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        })
                    }
                </div>
                <br />
                <div className="controllers">
                    <img onClick={e => this.plusSlides(-1)} className="left-arrow" src={require('../../../../Assets/Icons/right-arrow.svg')} />
                    <span>|</span>
                    <img onClick={e => this.plusSlides(1)} className="right-arrow" src={require('../../../../Assets/Icons/right-arrow.svg')} />
                </div>
            </div>
        );
    }
}

export default ClientSlider;