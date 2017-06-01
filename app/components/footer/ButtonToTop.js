import React from 'react';
import {observer} from 'mobx-react';

@observer
class ButtonToTop extends React.Component{
    constructor(props) {
        super();
        this.opacity = props.visible.opacity;
    }
    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset >= 1200) {
                this.opacity = '0.8';
                this.refs.btn.style = `opacity: ${this.opacity};`
            } else {
                this.opacity = '0';
                this.refs.btn.style = `opacity: ${this.opacity};`;
            }
        };
    }

    scrollToTopHandler(e) {
        e.preventDefault();
        let position = window.pageYOffset;
        setInterval(() => {
            if (position > 0) {
                position -= 150;
                window.scrollTo(0,position);
            }
            return false;
        }, 30);
    }
    render() {
        return(
            <aside className="top-button-block" ref="btn">
                <div className="top-button" onClick={this.scrollToTopHandler.bind(this)}></div>
            </aside>
        )
    }
}

export default ButtonToTop;