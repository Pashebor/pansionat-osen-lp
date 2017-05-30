import React from 'react';
import FeedbackSlider from './FeedbackSlider';
import ScrollableAnchor from 'react-scrollable-anchor';
import {observer} from 'mobx-react';

@observer
class Feedbacks extends React.Component{
    constructor(props){
        super();
        this.images = props.store.feedback.images;
    }
    openSliderHandler(e) {
        let imgArray = [];

        this.props.store.feedback.isOpen = true;

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
        this.props.store.feedback.arrayOnClick = imgArray;
    }
    render() {
        const feeds = this.images.map((image, i) => {
            let imageLink = `images/feedback/${image}`,
                imageCount = `image${i}`;
            return (
                <div className="feedback-list__item" key={i} >
                    <img ref={imageCount} src={imageLink} onClick={this.openSliderHandler.bind(this)}/>
                </div>
            )
        });
        return(
            <ScrollableAnchor id={'feedbacks'} >
            <section className="feedback">
                <div className="container">
                    <h2 className="feedback__title">ОТЗЫВЫ</h2>
                    <h6 className="feedback__subtitle">Сотрудники пансионата "Осень Жизни" помогут разукрасить осень в яркие краски, окружат заботой и укрепят здоровье качественным лечением</h6>
                    <div className="feedback-list">
                        {feeds}
                    </div>
                    <FeedbackSlider store={this.props.store.feedback}/>
                </div>
            </section>
            </ScrollableAnchor>
        )
    }
}

export default Feedbacks;