import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import InventoryBack from './InventoryBack';
import InventoryFront from './InventoryFront';

export class InventoryCard extends React.Component {
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
        if(this.props.uid !== this.props.inventory.userId){
            alert('Você não pode excluir esse estoque pois ele não te pertence');
            return;
        }
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

const mapStateToProps = (state) => ({
    uid: state.users.uid
});

export default connect(mapStateToProps)(InventoryCard);