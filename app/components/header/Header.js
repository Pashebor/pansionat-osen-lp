import React from 'react';


const Header = () => {
    return(
        <header className="header container">
                <figure className="header__logo">
                    <img src="images/logo.png" alt="Лого Золотая Осень Жизни" title="Золотая Осень Жизни"/>
                </figure>
               {/*<div className="header__logo">
                   <p>Золотая Осень Жизни</p>
               </div>*/}
               <nav className="navigation">
                 <ul className="navigation-list">
                     <li className="navigation-list__item"><a href="#services">УСЛУГИ</a></li>
                     <li className="navigation-list__item"><a href="#pansionats">ПАНСИОНАТЫ</a></li>
                     <li className="navigation-list__item"><a href='#gallery'>ГАЛЕРЕЯ</a></li>
                     <li className="navigation-list__item"><a href='#feedbacks'>ОТЗЫВЫ</a></li>
                     <li className="navigation-list__item"><a href='#contacts'>КОНТАКТЫ</a></li>
                 </ul>
              </nav>
              <div className="header-phones">
                  <a className="header-phones__item" href="tel:8(495)005-28-95">8 (495) 005-28-95</a>
                  <a className="header-phones__item" href="tel:8(925)377-31-66">8 (925) 377-31-66</a>
              </div>
        </header>
    )
};
export default Header;