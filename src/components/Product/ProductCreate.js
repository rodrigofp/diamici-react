import React from 'react';
import ProductForm from './ProductForm';
import Title from '../Shared/Title';
import { connect } from 'react-redux';
import { startAddProduct } from '../../actions/products';

export class ProductCreate extends React.Component {
    onSubmit = (product) => {
        this.props.startAddProduct(product);
        this.props.history.push('/products');
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>CADASTRO DE PRODUTO</Title>
                <div className="card_body__row">
                    <ProductForm
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddProduct: (product) => dispatch(startAddProduct(product))
});

export default connect(undefined, mapDispatchToProps)(ProductCreate);