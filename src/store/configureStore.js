import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productsReducer from '../reducers/products';
import inventoriesReducer from '../reducers/inventories';
import usersReducer from "../reducers/users";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,
            inventories: inventoriesReducer,
            users: usersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}

