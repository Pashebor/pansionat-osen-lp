import React from 'react';
import InputMask from 'react-input-mask';
import ScrollableAnchor from 'react-scrollable-anchor';
import ButtonToTop from './ButtonToTop';
import {observer} from 'mobx-react';


@observer
class Footer extends React.Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'order'};
        for (let field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        this.props.store.leaveAnOrderAction(formData);
    }
    render() {

        return(
            <ScrollableAnchor id={'contacts'} >
            <footer className="footer">
                <ButtonToTop visible={this.props.store.isVisible}/>
                <div className="container">
                    <div className="footer__blocks">
                        <div className="video-block">
                            <iframe width="520" height="320" src="https://www.youtube.com/embed/gxfHzrwcres?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <h2 className="video-block__title">МЫ ВСЕГДА РАДЫ ВИДЕТЬ НОВЫЕ ЛИЦА</h2>
                            <h6 className="video-block__subtitle">Комплексная забота о Ваших близких <span>24</span> часа в сутки <span>365</span> дней в году</h6>
                        </div>
                        <div className="message-block">
                            <h2 className="message-block__title">Пансионат по уходу за пожилыми людьми</h2>
                            <h6 className="message-block__subtitle">Оставить заявку на неделю <span>бесплатного</span> проживания</h6>
                            <form  className="message-block__form" encType="multipart/form-data" onSubmit={this.btnSubmitHandler.bind(this)}>
                                <input type="text" className="input-field" placeholder="Ваше имя" required="true" name="name" ref="name"/>
                                <InputMask mask="+7 (999) 999-99-99 " type="text" ref="phone" name="phone" className="input-field" placeholder="Ваш телефон" maskChar="_" required/>
                                <input type="submit" value="ОСТАВИТЬ ЗАЯВКУ" className="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            </ScrollableAnchor>
        )
    }
}

export default Footer;