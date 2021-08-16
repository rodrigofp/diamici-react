import { v4 as uuidv4 } from 'uuid';

//ADD PRODUCT
export const addProduct = ({
        identifier = '',
        name = '',
        colors = [],
        sizes =  []
    } = {}) => ({
    type: 'ADD_PRODUCT',
    product: {
        id: uuidv4(),
        identifier,
        name,
        colors,
        sizes
    }
});

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