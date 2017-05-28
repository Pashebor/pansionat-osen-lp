import React from 'react';

const Diseases = () => {
    return(
      <section className="diseases">
          <div className="container">
            <h2 className="diseases__title">МЫ ЗАБОТИМСЯ О ЛЮДЯХ СО СЛЕДУЮЩИМИ ЗАБОЛЕВАНИЯМИ:</h2>
            <div className="diseases-list">
                <div className="diseases-list__item">Онкологические заболевания</div>
                <div className="diseases-list__item">Уход за лежачими пациентами</div>
                <div className="diseases-list__item">Нарушения опорно-двигательного аппарата</div>
                <div className="diseases-list__item">Сосудистая деменция</div>
                <div className="diseases-list__item">Склероз</div>
                <div className="diseases-list__item">Заболевание суставов и остеохондроз</div>
                <div className="diseases-list__item">Заболевания нервной системы</div>
                <div className="diseases-list__item">Сердечно-сосудистые заболевания</div>
                <div className="diseases-list__item">Травмы и переломы различной степени тяжести</div>
                <div className="diseases-list__item">Снижение умственной деятельности</div>
                <div className="diseases-list__item">Болезнь Альцгеймера в различных стадиях</div>
                <div className="diseases-list__item">Сахарный диабет</div>
            </div>
          </div>
      </section>
    );
};

export default Diseases;