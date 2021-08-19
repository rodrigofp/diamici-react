import React from 'react';
import Title from '../Shared/Title';
import { connect } from 'react-redux';
import { startAddInventory } from '../../actions/inventories';
import InventoryForm from './InventoryForm';

export class InventoryCreate extends React.Component {
    onSubmit = (inventory) => {
        this.props.startAddInventory(inventory);
        this.props.history.push('/inventories');
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>CADASTRO DE ESTOQUE</Title>
                <div className="card_body__row">
                    <InventoryForm
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddInventory: (inventory) => dispatch(startAddInventory(inventory))
});

export default connect(undefined, mapDispatchToProps)(InventoryCreate);