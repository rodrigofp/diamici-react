import { v4 as uuidv4 } from 'uuid';

//ADD INVENTORY
export const addInventory = (
    {
        identifier = '',
        name = '',
        color = '',
        size =  '',
        userId = '',
        quantity = 0
    } = {}
) => ({
    type: 'ADD_INVENTORY',
    inventory: {
        id: uuidv4(),
        identifier,
        name,
        color,
        size,
        userId,
        quantity
    }
});

//REMOVE_INVENTORY
export const removeInventory = ({ id } = {}) => ({
    type: 'REMOVE_INVENTORY',
    id
});

//EDIT_INVENTORY
export const editInventory = (id, updates) => ({
    type: 'EDIT_INVENTORY',
    id,
    updates
});

