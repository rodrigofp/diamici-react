import React from 'react';
import ProductForm from './ProductForm';
import Title from '../Shared/Title';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/products';

const ProductCreate =(props) => (
    <div className="card_body__content">
        <Title>CADASTRO DE PRODUTO</Title>
        <div className="card_body__row">
            <ProductForm
                onSubmit={(product) => {
                    props.dispatch(addProduct(product));
                    props.history.push('/products');
                }} />
        </div>
    </div>
);


export default connect()(ProductCreate);