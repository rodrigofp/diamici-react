import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import Title from '../Shared/Title';
import { startEditProduct } from '../../actions/products';

export class ProductEdit extends React.Component {
    onSubmit = (product) => {
        this.props.startEditProduct(this.props.product.id, product);
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
    startEditProduct: (id, product) => dispatch(startEditProduct(id, product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);