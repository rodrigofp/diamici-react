import database from '../firebase/firebase';
import { setInventories } from './inventories';
import { setUsers } from './users';

//ADD PRODUCT
export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});

export const startAddProduct = (productData = {}) => {
    return (dispatch) => {
        const {
            identifier = '',
            name = '',
            colors = [],
            sizes =  []
        } = productData;
        const product = { identifier, name, colors, sizes };
        database.ref('products').push(product).then((ref) => {
            dispatch(addProduct({
                id: ref.key,
                ...product
            }));
        });
    }
};

//REMOVE_PRODUCT
export const removeProduct = ({ id } = {}) => ({
    type: 'REMOVE_PRODUCT',
    id
});

export const startRemoveProduct = ({ id } = {}) => {
    return (dispatch) => {
        database.ref(`products/${id}`).remove().then(() => {
            dispatch(removeProduct({ id }));
        })
    }
};

//EDIT_PRODUCT
export const editProduct = (id, updates) => ({
    type: 'EDIT_PRODUCT',
    id,
    updates
});

export const startEditProduct = (id, updates) => {
    return (dispatch) => {
        database.ref(`products/${id}`).update(updates).then(() => {
            dispatch(editProduct(id, updates));
        });
    }
}

// SET_PRODUCTS
export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

export const startSetEverything = () => {
    return (dispatch) => {
        return database.ref().once('value').then((snapshot) => {
            const products = [];
            snapshot.child('products').forEach((child) => {
                products.push({
                    id: child.key,
                    identifier: child.val().identifier,
                    name: child.val().name,
                    colors: child.val().colors,
                    sizes: child.val().sizes
                });
            });
            const inventories = [];
            snapshot.child('inventories').forEach((child) => {
                inventories.push({
                    id: child.key,
                    ...child.val()
                });
            });
            const users = [];
            snapshot.child('users').forEach((child) => {
                users.push({
                    id: child.key,
                    ...child.val()
                });
            });
            dispatch(setProducts(products));
            dispatch(setInventories(inventories));
            dispatch(setUsers(users));
        })
    };
};