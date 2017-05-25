import React from 'react';
import InputMask from 'react-input-mask';

class LifeQuality extends React.Component{
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
                        <form className="quality__form" action="" encType="multipart/form-data">
                            <InputMask mask="+7 (999) 999-99-99 " type="text" ref="phone" className="input-field" placeholder="Ваш телефон" maskChar="_" required/>
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