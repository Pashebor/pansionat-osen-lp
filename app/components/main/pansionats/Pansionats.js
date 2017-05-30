import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';


const Pansionats = () => {
    return(
       <ScrollableAnchor id={'pansionats'}>
        <section className="pansionats">
            <div className="container">
                <h2 className="pansionats__title">ПАНСИОНАТЫ</h2>
                <h6 className="pansionats__subtitle">Наш приоритет – создание домашнего уюта и комфорта для ваших близких</h6>
                <div className="pansionats-list">
                        <div className="pansionats-list__item">
                            <h4 className="title">Пансионат в Истре</h4>
                            <figure className="image">
                                <img src="images/pansionat-istra.jpg" alt="Пансионат в Истре" title="Истра"/>
                                <figcaption className="image__caption">МО, Истринский район, поселок Дубрава, 12б</figcaption>
                            </figure>
                            <ul className="desc-list">
                                <li className="desc-list__item">Просторные и комфортные номера</li>
                                <li className="desc-list__item">Каминный зал и гостиная для приятного общения</li>
                                <li className="desc-list__item">Экологически чистый район в получасе езды от Москвы по Новой Риге</li>
                            </ul>
                        </div>
                    <div className="pansionats-list__item">
                        <h4 className="title">Пансионат в Одинцово</h4>
                        <figure className="image">
                            <img src="images/pansionat-odintsovo.jpg" alt="Пансионат в Истре" title="Истра"/>
                            <figcaption className="image__caption">МО, Одинцовский р-н, поселение Ершово, 240</figcaption>
                        </figure>
                        <ul className="desc-list">
                            <li className="desc-list__item">Просторные номера со всеми удобствами</li>
                            <li className="desc-list__item">Экологически чистый и живописный район недалеко от МКАД</li>
                            <li className="desc-list__item">Дом площадью 600 кв.м. и красивый приусадебный участок</li>
                        </ul>
                    </div>
                    <div className="pansionats-list__item">
                        <h4 className="title">Пансионат в Дубраве</h4>
                        <figure className="image">
                            <img src="images/pansionat-istra.jpg" alt="Пансионат в Истре" title="Истра"/>
                            <figcaption className="image__caption">МО, Истринский район, поселок Дубрава, д.19</figcaption>
                        </figure>
                        <ul className="desc-list">
                            <li className="desc-list__item">Экологически чистый район недалеко от Москвы</li>
                            <li className="desc-list__item">Просторные и комфортные номера</li>
                        </ul>
                    </div>
                    </div>
                </div>
        </section>
       </ScrollableAnchor>
    );
};

export default Pansionats;