import React from 'react';
import ReactCardFlip from 'react-card-flip';
import ProductBack from './ProductBack';
import ProductFront from './ProductFront';

export default class ProductCard extends React.Component {
    state = {
        isFlipped: false
    };

    handleClick = (e) => {
        if(e.target !== e.currentTarget) return;
        e.preventDefault();
        this.setState((prevState) => ({
            isFlipped: !prevState.isFlipped
        }));
    };

    handleRemove = () => {
        this.props.onRemove(this.props.product.id);
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <ProductFront
                    product={this.props.product}
                    handleClick={this.handleClick} />
                <ProductBack
                    handleClick={this.handleClick}
                    handleRemove={this.handleRemove}
                    id={this.props.product.id} />
            </ReactCardFlip>
        );
    };
};