import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import middleWare from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/PansionatApp.jsx';

const store = createStore(reducers, {}, applyMiddleware(middleWare));

render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={App}/>
        </Router>

    </Provider>, document.getElementById('app')
);