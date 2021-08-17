import { createStore, combineReducers } from "redux";
import productsReducer from '../reducers/products'
import inventoriesReducer from '../reducers/inventories'

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,
            inventories: inventoriesReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

