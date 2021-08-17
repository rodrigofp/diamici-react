import React from 'react';
import { connect } from 'react-redux';
import Title from '../Shared/Title';
import InventoryForm from './InventoryForm';
import { editInventory } from '../../actions/inventories';

const InventoryEdit = (props) => {
    return (
        <div className="card_body__content">
            <Title>ALTERAÇÃO DE ESTOQUE</Title>
            <div className="card_body__row">
                <InventoryForm
                    inventory={props.inventory}
                    onSubmit={(inventory) => {
                        props.dispatch(editInventory(props.inventory.id, inventory));
                        props.history.push('/inventories');
                    }} />
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        inventory: state.inventories.find((inventory) => inventory.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(InventoryEdit);