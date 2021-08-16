import React from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { removeProduct } from '../../actions/products';

const ProductList = (props) => (
    <div className="card_body__row">
        {
            props.products.map((product) =>
                <ProductCard
                    key={product.id}
                    product={product}
                    onRemove={(id) => {
                        props.dispatch(removeProduct({ id }));
                    }} />
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList);