import React from 'react';

class ComplexCare extends React.Component{
    render(){
        return(
            <section className="complex-care">
                <div className="container">
                    <h2 className="complex-care__title">Комплексная забота о Ваших близких</h2>
                    <h6 className="complex-care__subtitle"><span>24</span> часа в сутки, <span>7</span> дней в неделю, <span>365</span> дней в году</h6>
                    <div className="complex-care-cases">
                        <div className="complex-care-cases__item">
                           <figure>
                            <img src="images/health.svg" alt="Здоровье близких" title="Здоровье Ваших близких"/>
                           </figure>
                           <p>Здоровье Ваших близких - наш приоритет</p>
                        </div>
                        <div className="complex-care-cases__item">
                            <figure>
                                <img src="images/meal.svg" alt="Питание" title="Питание"/>
                            </figure>
                            <p>Персональная программа питания</p>
                        </div>
                        <div className="complex-care-cases__item">
                            <figure>
                                <img src="images/care.svg" alt="Уход" title="Уход"/>
                            </figure>
                            <p>Профессиональный уход 24/7</p>
                        </div>
                        <div className="complex-care-cases__item">
                            <figure>
                                <img src="images/leisure.svg" alt="Досуг" title="Досуг"/>
                            </figure>
                            <p>Разнообразный досуг и общение</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ComplexCare;