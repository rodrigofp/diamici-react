import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

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

//EDIT_PRODUCT
export const editProduct = (id, updates) => ({
    type: 'EDIT_PRODUCT',
    id,
    updates
});