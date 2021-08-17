import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import Title from '../Shared/Title';
import { editProduct } from '../../actions/products';

const ProductEdit = (props) => {
    return (
    <div className="card_body__content">
        <Title>ALTERAÇÃO DE PRODUTO</Title>
        <div className="card_body__row">
            <ProductForm
                product={props.product}
                onSubmit={(product) => {
                    props.dispatch(editProduct(props.product.id, product));
                    props.history.push('/products');
                }} />
        </div>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        product: state.products.find((product) => product.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(ProductEdit);