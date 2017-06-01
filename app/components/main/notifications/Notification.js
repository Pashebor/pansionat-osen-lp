import React from 'react';
import {observer} from 'mobx-react';

@observer
class Notification extends React.Component{
    constructor(props) {
        super();
        this.message = props.message;
    }
    isShow(){
        if(this.message.offerForm || this.message.orderForm) {
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

    closeNotificationHandler(){
        this.message.orderForm = null;
        this.message.offerForm = null;
    }
    render() {
        return(
            <section className="popup-overlay" style={this.isShow()} onClick={this.closeNotificationHandler.bind(this)}>
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeNotificationHandler.bind(this)}>&times;</div>
                    {(this.message.offerForm || this.message.orderForm) ? <div className="popup-form__notification"><p>{this.message.orderForm || this.message.offerForm}</p></div> : null}
                </div>
            </section>
        )
    }
}

export default Notification;
