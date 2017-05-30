import React from 'react';
import Header from './header/Header'
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import {observer} from 'mobx-react';
import store from './AppSore';
import  { configureAnchors, removeHash } from 'react-scrollable-anchor';

@observer
class App extends React.Component{
    constructor(){
        super();
        configureAnchors({offset: 0, scrollDuration: 1000});
        removeHash();
    }
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