import { createStore, combineReducers } from "redux";
import productsReducer from '../reducers/products'
import filtersReducer from '../reducers/filters'
import inventoriesReducer from '../reducers/inventories'

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,
            inventories: inventoriesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

