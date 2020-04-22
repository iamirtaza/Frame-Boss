import React from 'react';
import './style.css'


var slideIndex = 1;


class ClientSlider extends React.Component {

    componentDidMount = () => {  
        this.showSlides(slideIndex);
    }

    plusSlides = (n) => {
        this.showSlides(slideIndex += n);
    }

    // currentSlide = (n) => {
    //     console.log("ss")
    //     this.showSlides(slideIndex = n);
    // }

    showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slides[slideIndex-1].style.display = "block";  
     
      }

    render() {
        return (
            <div>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                    <div class="parent">
                        <img class="image1" src={require('../../../../Assets/Icons/back-frame.svg')} />
                        <img class="image2" src={require('../../../../Assets/Images/frame-front.png')} />
                    </div>
                    </div>

                    <div className="mySlides fade">
                    <div class="parent">
                        <img class="image1" src={require('../../../../Assets/Icons/back-frame.svg')} />
                        <img class="image2" src={require('../../../../Assets/Images/frame-front.png')} />
                    </div>
                    </div>

                    <div className="mySlides fade">
                    <div class="parent">
                        <img class="image1" src={require('../../../../Assets/Icons/back-frame.svg')} />
                        <img class="image2" src={require('../../../../Assets/Images/frame-front.png')} />
                    </div>
                    </div>
                </div>
                <br />

                <div className="controllers">
                    <img onClick={e=>this.plusSlides(-1)} className="left-arrow" src={require('../../../../Assets/Icons/right-arrow.svg')} />
                    <span>|</span>
                    <img onClick={e=>this.plusSlides(1)} className="right-arrow" src={require('../../../../Assets/Icons/right-arrow.svg')} />
                </div>
            </div>
        );
    }
}

export default ClientSlider;