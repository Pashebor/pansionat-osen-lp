import React from 'react';
import LifeQuality from './life-quality/LifeQuality';
import ComplexCare from './complex-care/ComplexCare';
import Causes from './causes/Causes';
import Diseases from './diseases/Diseases';
import Pansionats from './pansionats/Pansionats';

class Main extends React.Component {
    render() {
        return(
            <main className="main">
                <LifeQuality/>
                <ComplexCare/>
                <Causes/>
                <Diseases/>
                <Pansionats/>
            </main>
        )
    }
}

export default Main;