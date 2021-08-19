import { expect } from "@jest/globals";
import productsReducer from "../../reducers/products";
import productList from '../fixtures/products';

test('should setup default product values', () => {
    const state = productsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove product by id', () => {
    const action = {
        type: 'REMOVE_PRODUCT',
        id: productList[1].id
    };
    const state = productsReducer(productList, action);
    expect(state).toEqual([productList[0]]);
});

test('should not remove product if id not found', () => {
    const action = {
        type: 'REMOVE_PRODUCT',
        id: '-1'
    };
    const state = productsReducer(productList, action);
    expect(state).toEqual(productList);
});

test('should add product', () => {
    const product = {
        id: '13',
        identifier: 'abcdefg'
    }
    const action = {
        type: 'ADD_PRODUCT',
        product
    };
    const state = productsReducer(productList, action);
    expect(state).toEqual(
        [
            ...productList,
            {
                ...product
            }
        ]);
});

test('should edit a product', () => {
    const updates = {
        colors: ['Laranja']
    };
    const action = {
        type: 'EDIT_PRODUCT',
        id: productList[0].id,
        updates
    };
    const state = productsReducer(productList, action);
    expect(state).toEqual([
        { ...productList[0], ...updates },
        productList[1]
    ]);
});

test('should not edit a product', () => {
    const updates = {
        colors: ['Laranja']
    };
    const action = {
        type: 'EDIT_PRODUCT',
        id: '-1',
        updates
    };
    const state = productsReducer(productList, action);
    expect(state).toEqual(productList);
});