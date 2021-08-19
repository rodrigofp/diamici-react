import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DiamiciApp from './components/Shared/DiamiciApp';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <DiamiciApp />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));