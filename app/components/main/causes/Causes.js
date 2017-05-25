import React from 'react';

class Causes extends React.Component{
    render() {
        return(
            <section className="causes">
                <div className="container">
                    <h2 className="causes__title" ><span>10</span> причин, почему <span>73%</span> наших клиентов приходят к нам по рекомендации</h2>
                    <div className="causes-list">
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/house.png" alt="Условия проживания" title="Условия проживания"/>
                            </figure>
                            <p>Комфортные условия </p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/payment.png" alt="Гибкая система ценообразования" title="Гибкая система ценообразования"/>
                            </figure>
                            <p>Гибкая система ценообразования (от 700 руб. в сутки)</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/nurse.png" alt="Круглосуточная забота" title="Круглосуточная забота"/>
                            </figure>
                            <p>Круглосуточная забота Регулярный осмотр врача и индивидуальный уход</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/wallet.png" alt="Рассрочка платежа" title="Рассрочка платежа"/>
                            </figure>
                            <p>Возможность рассрочки платежа</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/cctv.png" alt="Видеонаблюдение" title="Видеонаблюдение"/>
                            </figure>
                            <p>Видеонаблюдение</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/transfer.png" alt="Трансфер в пансионат" title="Трансфер в пансионат"/>
                            </figure>
                            <p>Трансфер Ваших близких в пансионат</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/amuse.png" alt="Организованный досуг" title="Организованный досуг"/>
                            </figure>
                            <p>Организованный досуг Настольные и анимационные игры, домашний кинотеатр</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/contract.png" alt="Выезд для заключения договора" title="Выезд для заключения договора"/>
                            </figure>
                            <p>Возможность выезда нашего представителя для заключения договора</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/calc.png" alt="Фиксированная стоимость" title="Фиксированная стоимость"/>
                            </figure>
                            <p>Стоимость фиксируется договором. Нет скрытых платежей</p>
                        </div>
                        <div className="causes-list__item">
                            <figure>
                                <img src="images/church.png" alt="Церковь" title="Церковь"/>
                            </figure>
                            <p>Посещения настоятеля</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Causes;