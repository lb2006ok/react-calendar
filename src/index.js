import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

import './index.css';
import App from './App';
import './css/Style.css';
import 'normalize.css';

import 'flex.css/dist/data-flex.css';

// import {Provider} from 'react-redux';
// import store from './Config/Store';
import registerServiceWorker from './registerServiceWorker';


fontawesome.library.add(brands, solid);
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
