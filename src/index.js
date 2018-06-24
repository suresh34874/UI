import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer/reducer'
import {HashRouter as Router} from 'react-router-dom';

const store = createStore(reducer)
ReactDOM.render(<Provider store = {store}>
     <Router>
        <App/>
    </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
