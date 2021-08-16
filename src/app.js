import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DiamiciApp from './Components/DiamiciApp';
import configureStore from './store/configureStore';
import { addProduct } from './actions/products';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addProduct({
    identifier: '1234567',
    name: 'BLUSA MANGA MORCEGO',
    colors: ['AZUL', 'MARROM', 'VERMELHO'],
    sizes: ['P', 'M', 'GG']
}));
store.dispatch(addProduct({
    identifier: '7654321',
    name: 'CALÇA MOLETOM',
    colors: ['PRETA'],
    sizes: ['38', '42', '46']
}));
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <DiamiciApp />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));