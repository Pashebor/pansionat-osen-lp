import React from 'react';
import LifeQuality from './life-quality/LifeQuality';
import ComplexCare from './complex-care/ComplexCare';
import Causes from './causes/Causes';
import Diseases from './diseases/Diseases';
import Pansionats from './pansionats/Pansionats';
import Gallery from './gallery/Gallery';
import Feedbacks from './feedbacks/Feedbacks';
import Notification from './notifications/Notification';


class Main extends React.Component {
    render() {
        return(
            <main className="main">
                <Notification message={this.props.store.forms}/>
                <LifeQuality store={this.props.store}/>
                <ComplexCare/>
                <Causes/>
                <Diseases/>
                <Pansionats/>
                <Gallery store={this.props.store.gallery}/>
                <Feedbacks store={this.props.store}/>
            </main>
        )
    }
}

export default Main;