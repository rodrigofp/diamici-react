import React from 'react';
import ReactCardFlip from 'react-card-flip';
import ProductBack from './ProductBack';
import ProductFront from './ProductFront';
import { connect } from 'react-redux';

class ProductCard extends React.Component {
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
        if(this.props.inventories.some((inv) => inv.identifier === this.props.product.identifier)){
            alert('Esse produto possuí estoque, remova o estoque antes de excluir esse produto');
            return;
        }
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

const mapStateToProps = (state) => {
    return {
        inventories: state.inventories
    }
}

export default connect(mapStateToProps)(ProductCard);