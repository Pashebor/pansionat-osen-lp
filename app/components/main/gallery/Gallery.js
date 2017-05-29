import React from 'react';
import GallerySlider from './GallerySlider';
import {observer} from 'mobx-react';


@observer
class Gallery extends React.Component{
    constructor(props){
        super();
        this.pictures = props.store.pictures;
    }

    openGalleryHandler(e) {
        let imgArray = [];

        this.props.store.isOpen = true;

        for (let image in this.refs) {
            if (this.refs.hasOwnProperty(image)) {
                let source = this.refs[image].src;
                imgArray.push(source);
            }
        }

        imgArray.find((source) => {
            if (source === e.target.src) {
                let index = imgArray.indexOf(source);
                imgArray.splice(index, 1);
                imgArray.unshift(e.target.src);
            }
        });
        this.props.store.galleryOnClick = imgArray;
    }

    render() {
        const pictures = this.pictures.map((picture, i) => {
            let link = `images/gallery/${picture}`;
            let pictureRef = `image${picture}`;
            return (
                <div className="gallery__grid__item" key={i}>
                    <img ref={pictureRef} src={link} onClick={this.openGalleryHandler.bind(this)}/>
                </div>
            )
        });
        return(
            <section className="gallery">
                <div className="container">
                    <h2 className="gallery__title">ГАЛЕРЕЯ</h2>
                    <h6 className="gallery__subtitle">Наш приоритет – создание домашнего уюта и комфорта для ваших близких</h6>
                    <div className="gallery__grid">
                        {pictures}
                    </div>
                </div>
                <GallerySlider store={this.props.store}/>
            </section>
        )
    }
}

export default Gallery;