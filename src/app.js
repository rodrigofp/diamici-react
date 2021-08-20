import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DiamiciApp from './components/Shared/DiamiciApp';
import Login from './components/Login/Login';
import { history } from './routers/AppRouter';
import Spinner from './components/Shared/Spinner';
import configureStore from './store/configureStore';
import { startSetEverything } from './actions/products';
import { login, logout } from './actions/users';
import { auth } from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <DiamiciApp />
    </Provider>
);
const jsxLogin = (
    <Provider store={store}>
        <Login />
    </Provider>
)

auth.onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        ReactDOM.render(<Spinner />, document.getElementById('app'));
        store.dispatch(startSetEverything()).then(() => {
            if(history.location.pathname === '/Login')
                history.push('/products');
            ReactDOM.render(jsx, document.getElementById('app'));
        });
    } else {
        store.dispatch(logout());
        history.push('/Login');
        ReactDOM.render(jsxLogin, document.getElementById('app'));
    }
});