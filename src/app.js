import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DiamiciApp from './components/Shared/DiamiciApp';
import Spinner from './components/Shared/Spinner';
import configureStore from './store/configureStore';
import { startSetProducts } from './actions/products';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <DiamiciApp />
    </Provider>
)

ReactDOM.render(<Spinner />, document.getElementById('app'));

store.dispatch(startSetProducts()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});