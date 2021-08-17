import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DiamiciApp from './components/Shared/DiamiciApp';
import configureStore from './store/configureStore';
import { addProduct } from './actions/products';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addProduct({
    identifier: '1234567',
    name: 'Brusinha',
    colors: ['Azul', 'Amarelo', 'Vermelho', 'Cinza'],
    sizes: ['P', 'M', 'G', 'GG', 'XG']
}));

store.dispatch(addProduct({
    identifier: '7891234',
    name: 'Calça moletom',
    colors: ['Preto', 'Branco', 'Roxo'],
    sizes: ['36', '38', '40', '46']
}));

const jsx = (
    <Provider store={store}>
        <DiamiciApp />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));