import React from 'react';
import { connect } from 'react-redux';
import Title from '../Shared/Title';
import InventoryForm from './InventoryForm';
import { startEditInventory } from '../../actions/inventories';

export class InventoryEdit extends React.Component {
    onSubmit = (inventory) => {
        this.props.startEditInventory(this.props.inventory.id, inventory);
        this.props.history.push('/inventories');
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>ALTERAÇÃO DE ESTOQUE</Title>
                <div className="card_body__row">
                    <InventoryForm
                        inventory={this.props.inventory}
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditInventory: (id, inventory) => dispatch(startEditInventory(id, inventory))
});

const mapStateToProps = (state, props) => {
    return {
        inventory: state.inventories.find((inventory) => inventory.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryEdit);