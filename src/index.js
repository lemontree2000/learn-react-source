import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { Provider } from 'react-redux';
import { Provider } from './redux/react-redux';
import store from './store/index';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
