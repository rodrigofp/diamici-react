import database from '../firebase/firebase';

//ADD INVENTORY
export const addInventory = (inventory) => ({
    type: 'ADD_INVENTORY',
    inventory
});

export const startAddInventory = (inventoryData = {}) => {
    return (dispatch) => {
        const {
            identifier = '',
            name = '',
            color = '',
            size =  '',
            userId = '',
            quantity = 0
        } = inventoryData;
        const inventory = { identifier, name, color, size, userId, quantity };
        database.ref('inventories').push(inventory).then((ref) => {
            dispatch(addInventory({
                id: ref.key,
                ...inventory
            }));
        });
    };
};

//REMOVE_INVENTORY
export const removeInventory = ({ id } = {}) => ({
    type: 'REMOVE_INVENTORY',
    id
});

export const startRemoveInventory = ({ id } = {}) => {
    return (dispatch) => {
        database.ref(`inventories/${id}`).remove().then(() => {
            dispatch(removeInventory({ id }));
        });
    };
};

//EDIT_INVENTORY
export const editInventory = (id, updates) => ({
    type: 'EDIT_INVENTORY',
    id,
    updates
});

export const startEditInventory = (id, updates) => {
    return (dispatch) => {
        database.ref(`inventories/${id}`).update(updates).then(() => {
            dispatch(editInventory(id, updates));
        })
    };
};

//SET_INVENTORIES
export const setInventories = (inventories) => ({
    type: 'SET_INVENTORIES',
    inventories
});

export const startSetInventories = () => {
    return (dispatch) => {
        return database.ref('inventories').once('value').then((snapshot) => {
            const inventories = [];
            snapshot.forEach((child) => {
                inventories.push({
                    id: child.key,
                    ...child.val()
                });
            });
            dispatch(setInventories(inventories));
        });
    };
};

