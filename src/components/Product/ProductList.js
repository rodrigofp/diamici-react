import React from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { startRemoveProduct } from '../../actions/products';

export class ProductList extends React.Component {
    onRemove = (id) => {
        this.props.startRemoveProduct({ id })
    };

    render() {
        return (
            <div className="card_body__row">
                {
                    this.props.products.map((product) =>
                        <ProductCard
                            key={product.id}
                            product={product}
                            onRemove={this.onRemove} />
                    )
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => ({
    startRemoveProduct: ({ id }) => dispatch(startRemoveProduct({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);