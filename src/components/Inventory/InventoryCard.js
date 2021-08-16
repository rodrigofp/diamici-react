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

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <InventoryFront
                    inventory={this.props.inventory}
                    handleClick={this.handleClick} />
                <InventoryBack handleClick={this.handleClick} />
            </ReactCardFlip>
        );
    };
};