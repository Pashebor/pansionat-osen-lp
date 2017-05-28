import React from 'react';
import Header from './header/Header'
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import {observer} from 'mobx-react';
import store from './AppSore';

@observer
class App extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <Main store={store}/>
                <Footer store={store}/>
            </div>
        )
    }
};

export default App;