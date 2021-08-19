import { expect } from "@jest/globals";
import inventoriesReducer from '../../reducers/inventories';
import inventoryList from '../fixtures/inventories';

test('should setup default inventories values', () => {
    const state = inventoriesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove inventory by id', () => {
    const action = {
        type: 'REMOVE_INVENTORY',
        id: inventoryList[1].id
    };
    const state = inventoriesReducer(inventoryList, action);
    expect(state).toEqual([inventoryList[0],inventoryList[2]]);
});

test('should not remove inventory if id not found', () => {
    const action = {
        type: 'REMOVE_INVENTORY',
        id: '-1'
    };
    const state = inventoriesReducer(inventoryList, action);
    expect(state).toEqual(inventoryList);
});

test('should add inventory', () => {
    const inventory = {
        id: '13',
        identifier: 'abcdefg'
    }
    const action = {
        type: 'ADD_INVENTORY',
        inventory
    };
    const state = inventoriesReducer(inventoryList, action);
    expect(state).toEqual(
        [
            ...inventoryList,
            {
                ...inventory
            }
        ]);
});

test('should edit an inventory', () => {
    const updates = {
        color: 'Laranja'
    };
    const action = {
        type: 'EDIT_INVENTORY',
        id: inventoryList[0].id,
        updates
    };
    const state = inventoriesReducer(inventoryList, action);
    expect(state).toEqual([
        { ...inventoryList[0], ...updates },
        inventoryList[1],
        inventoryList[2]
    ]);
});

test('should not edit an inventory', () => {
    const updates = {
        colors: 'Laranja'
    };
    const action = {
        type: 'EDIT_INVENTORY',
        id: '-1',
        updates
    };
    const state = inventoriesReducer(inventoryList, action);
    expect(state).toEqual(inventoryList);
});