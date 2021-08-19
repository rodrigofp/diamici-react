import { expect } from "@jest/globals";
import { addInventory, editInventory, removeInventory } from "../../actions/inventories";

test('should setup remove inventory action object', () => {
    const action = removeInventory({ id: '1' });
    expect(action).toEqual({
        type: 'REMOVE_INVENTORY',
        id: '1'
    });
});

test('should setup edit inventory action object', () => {
    const inventoryData = {
        identifier: '1234567',
        name: 'Brusinha',
        color: 'Azul',
        size: 'P',
        userId: '1',
        quantity: '10'
    }
    const action = editInventory('1', inventoryData);
    expect(action).toEqual({
        type: 'EDIT_INVENTORY',
        id: '1',
        updates: {
            ...inventoryData
        }
    });
});

test('should setup add inventory action object with provided values', () => {
    const inventoryData = {
        identifier: '1234567',
        name: 'Brusinha',
        color: 'Azul',
        size: 'P',
        userId: '1',
        quantity: '10'
    }
    const action = addInventory(inventoryData);
    expect(action).toEqual({
        type: 'ADD_INVENTORY',
        inventory: {
            ...inventoryData,
            id: expect.any(String)
        }
    })
});

test('should setup add inventory action object with default values', () => {
    const action = addInventory({});
    expect(action).toEqual({
        type: 'ADD_INVENTORY',
        inventory: {
            identifier: '',
            name: '',
            color: '',
            size: '',
            userId: '',
            quantity: 0,
            id: expect.any(String)
        }
    });
});