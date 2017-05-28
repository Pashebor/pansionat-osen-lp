import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer__blocks">
                        <div className="video-block">
                            <iframe width="520" height="320" src="https://www.youtube.com/embed/gxfHzrwcres?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <h2 className="video-block__title">МЫ ВСЕГДА РАДЫ ВИДЕТЬ НОВЫЕ ЛИЦА</h2>
                            <h6 className="video-block__subtitle">Комплексная забота о Ваших близких <span>24</span> часа в сутки <span>365</span> дней в году</h6>
                        </div>
                        <div className="message-block">
                            hi
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;