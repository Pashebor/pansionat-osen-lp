import { observable, computed, autorun, action } from 'mobx';
import {requestCallback} from './../utils/ajax';

class AppSore {
    @observable gallery = {
        pictures: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
            "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"],
        isOpen: false,
        galleryOnClick: []
    };
    @observable feedback = {
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        isOpen: false,
        arrayOnClick: []
    };

    @observable forms = {
        offerForm: null,
        orderForm: null
    };

/*ACTIONS*/
    @action useAnOfferAction = (formData) => {
        return requestCallback('./send_mail.php', formData)
            .then(action(json => this.forms.offerForm = json.response))
            .catch(error => {
                throw new Error(error)
            });
    };

    @action leaveAnOrderAction = (formData) => {
        return requestCallback('./send_mail.php', formData)
            .then(action(json => this.forms.orderForm = json.response))
            .catch(error => {
                throw new Error(error)
            });
    };
/***************************************/


}

var store = new AppSore;
autorun(() => {
    console.log(store.forms.offerForm);
    console.log(store.forms.orderForm);
});

export default store;