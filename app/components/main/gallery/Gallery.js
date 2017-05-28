import React from 'react';

class Gallery extends React.Component{
    constructor(props){
        super();
        this.store = props.store;
    }
    render() {
        const pictures = this.store.pictures.map((picture, i) => {
            let link = `images/gallery/${picture}`;
            return (
                <div className="gallery__grid__item" key={i}>
                    <img src={link} />
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
            </section>
        )
    }
}

export default Gallery;