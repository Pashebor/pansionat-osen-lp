import React from 'react';
import LifeQuality from './life-quality/LifeQuality';
import ComplexCare from './complex-care/ComplexCare';
import Causes from './causes/Causes';

class Main extends React.Component {
    render() {
        return(
            <main className="main">
                <LifeQuality/>
                <ComplexCare/>
                <Causes/>
            </main>
        )
    }
}

export default Main;