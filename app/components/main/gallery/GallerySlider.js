import React from 'react';
import Slider from 'react-slick';
import {observer} from 'mobx-react';

@observer
class GallerySlider extends React.Component{
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

    closeGalleryHandler() {
        this.props.store.isOpen = false;
        this.refs.slider.slickGoTo(20);
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

        const clickedImage = () => {
            return this.props.store.galleryOnClick.slice().map((image, i)=> {
                let imageLink = `${image}`;
                return (
                    <div className="popup-image" key={i}><img src={imageLink}/></div>
                )
            });
        };
        return(
            <Slider ref="slider" {...settings}>
                {(this.props.store.galleryOnClick.slice() == 0) ? <div>none</div> : clickedImage()}
            </Slider>
        )
    }
    render() {
        return(
            <section className="popup-overlay" style={this.isShow()}>
                <div className="popup-gallery">
                    <div className="popup-fullcase__close" onClick={this.closeGalleryHandler.bind(this)}>&times;</div>
                    {this.showLider()}
                </div>
            </section>
        )
    }
}

export default GallerySlider;