import React from 'react';
import InputMask from 'react-input-mask';
import {observer} from 'mobx-react';


@observer
class LifeQuality extends React.Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'callback'};
        for (let field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        this.props.store.useAnOfferAction(formData);
    }
    render() {
        return(
            <section className="quality">
                <div className="quality__wrapper">
                    <div className="container">
                      <div className="quality__container">
                        <h1 className="quality__title">ПАНСИОНАТ ДЛЯ ПОЖИЛЫХ ЛЮДЕЙ</h1>
                        <h4 className="quality__subtitle">Обеспечьте Вашим близким лучшее качество жизни и активное долголетие</h4>
                        <hr className="line"/>
                        <p className="quality__text">Оставьте заявку до <span> ПЯТНИЦЫ </span> и получите неделю <span> БЕСПЛАТНОГО </span> проживания</p>
                          {this.props.store.forms.offerForm ? <div className="message-ok"><p>Ваша заявка принята, с Вами свяжется наш менеджер</p></div> : null}
                        <form className="quality__form" action="" encType="multipart/form-data" onSubmit={this.btnSubmitHandler.bind(this)}>
                            <InputMask mask="+7 (999) 999-99-99" type="text" ref="phone" name="phone" className="input-field" placeholder="Ваш телефон" maskChar="_" required/>
                            <input type="submit" value="ВОСПОЛЬЗОВАТЬСЯ ПРЕДЛОЖЕНИЕМ" className="btn"/>
                        </form>
                     </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LifeQuality;