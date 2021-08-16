import React from 'react';
import CardLabel from '../Shared/CardLabel';

const ProductFront = (props) => (
    <div
        className="card__item--front"
        onClick={props.handleClick} >
        <CardLabel className="product__identifier">
            {`${props.product.identifier} | ${props.product.name}`}
        </CardLabel>
        <CardLabel className="product__colors">
            {props.product.colors.join(' | ')}
        </CardLabel>
        <CardLabel className="product__sizes">
            {props.product.sizes.join(' | ')}
        </CardLabel>
    </div>
);

export default ProductFront;