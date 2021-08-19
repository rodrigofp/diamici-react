import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import Title from '../Shared/Title';
import { editProduct } from '../../actions/products';

export class ProductEdit extends React.Component {
    onSubmit = (product) => {
        this.props.editProduct(this.props.product.id, product);
        this.props.history.push('/products');
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>ALTERAÇÃO DE PRODUTO</Title>
                <div className="card_body__row">
                    <ProductForm
                        product={this.props.product}
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    product: state.products.find((product) => product.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editProduct: (id, product) => dispatch(editProduct(id, product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);