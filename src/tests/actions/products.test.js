import { expect } from "@jest/globals";
import { addProduct, editProduct, removeProduct } from "../../actions/products";

test('should setup remove product action object', () => {
    const action = removeProduct({ id: '1' });
    expect(action).toEqual({
        type: 'REMOVE_PRODUCT',
        id: '1'
    });
});

test('should setup edit product action object', () => {
    const action = editProduct('1', { identifier: '1234567', name: 'Brusinha'});
    expect(action).toEqual({
        type: 'EDIT_PRODUCT',
        id: '1',
        updates: {
            identifier: '1234567',
            name: 'Brusinha'
        }
    });
});

test('should setup add product action object with provided values', () => {
    const productData = {
        identifier: '1234567',
        name: 'Brusinha',
        colors: ['Azul'],
        sizes: ['P']
    };
    const action = addProduct(productData);
    expect(action).toEqual({
        type: 'ADD_PRODUCT',
        product: {
            ...productData,
            id: expect.any(String)
        }
    })
});

test('should setup add product action object with default values', () => {
    const action = addProduct({});
    expect(action).toEqual({
        type: 'ADD_PRODUCT',
        product: {
            identifier: '',
            name: '',
            colors: [],
            sizes: [],
            id: expect.any(String)
        }
    });
});