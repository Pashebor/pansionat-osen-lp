import React from 'react';
import Slider from 'react-slick';
import {observer} from 'mobx-react';

@observer
class FeedbackSlider extends React.Component{
    isShow(){
        if(this.props.store.isOpen) {
            return {
                display: 'block',
                animation: 'popupAnimOpen 0.4s 1 linear'
            };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }
    closeFullcaseHandler(e) {
        e.stopPropagation();
        this.props.store.isOpen = false;
        this.refs.slider.slickGoTo(4);
    }
    showLider() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }]
        };
        /*const images = () =>{
                return this.props.store.images.map((image, i)=> {
                    let imageLink = `images/feedback/${image}`;
                    return (
                        <div className="popup-image" key={i}><img src={imageLink}/></div>
                    )
                });
        };*/
        const clickedImage = () => {
            return this.props.store.arrayOnClick.slice().map((image, i)=> {
                let imageLink = `${image}`;
                console.log(imageLink);
                return (
                    <div className="popup-image" key={i}><img src={imageLink}/></div>
                )
            });
        };
        return(
            <Slider ref="slider" {...settings}>
                {(this.props.store.arrayOnClick.slice() == 0) ? <div>none</div> : clickedImage()}
            </Slider>
        )
    }
    render(){
        return(
            <section className="popup-overlay" style={this.isShow()}>
                <div className="popup-fullcase">
                    <div className="popup-fullcase__close" onClick={this.closeFullcaseHandler.bind(this)}>&times;</div>
                    {this.showLider()}
                </div>
            </section>
        )
    }
}

export default FeedbackSlider;