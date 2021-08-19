import React from 'react';
import ReactCardFlip from 'react-card-flip';
import InventoryBack from './InventoryBack';
import InventoryFront from './InventoryFront';

export default class InventoryCard extends React.Component {
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
        //TODO: Validar usuário
        this.props.onRemove(this.props.inventory.id);
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <InventoryFront
                    inventory={this.props.inventory}
                    handleClick={this.handleClick} />
                <InventoryBack
                    id={this.props.inventory.id}
                    handleClick={this.handleClick}
                    handleRemove={this.handleRemove} />
            </ReactCardFlip>
        );
    };
};