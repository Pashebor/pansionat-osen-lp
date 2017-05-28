import React from 'react';

class Feedbacks extends React.Component{
    constructor(props){
        super();
        this.store = props.store;
    }
    render() {
        const feeds = this.store.feedbacks.map((image, i) => {
            let imageLink = `images/feedback/${image}`;
            return (
                <div className="feedback-list__item" key={i}>
                    <img src={imageLink}/>
                </div>
            )
        });
        return(
            <section className="feedback">
                <div className="container">
                    <h2 className="feedback__title">ОТЗЫВЫ</h2>
                    <h6 className="feedback__subtitle">Сотрудники пансионата "Осень Жизни" помогут разукрасить осень в яркие краски, окружат заботой и укрепят здоровье качественным лечением</h6>
                    <div className="feedback-list">
                        {feeds}
                    </div>
                </div>
            </section>
        )
    }
}

export default Feedbacks;