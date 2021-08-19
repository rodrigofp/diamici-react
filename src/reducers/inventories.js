const inventoriesReducerDefaultState = [];
export default (state = inventoriesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_INVENTORY':
            return [
                ...state,
                action.inventory
            ];
        case 'REMOVE_INVENTORY':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_INVENTORY':
            return state.map((inventory) => {
                if(inventory.id === action.id){
                    return {
                        ...inventory,
                        ...action.updates
                    }
                } else {
                    return inventory;
                }
            });
        case 'SET_INVENTORIES':
            return action.inventories;
        default:
            return state;
    }
};