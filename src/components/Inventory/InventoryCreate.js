import React from 'react';
import Title from '../Shared/Title';
import { connect } from 'react-redux';
import { addInventory } from '../../actions/inventories';
import InventoryForm from './InventoryForm';

const InventoryCreate = (props) => (
    <div className="card_body__content">
        <Title>CADASTRO DE ESTOQUE</Title>
        <div className="card_body__row">
            <InventoryForm
                onSubmit={(inventory) => {
                    console.log(inventory);
                    props.dispatch(addInventory(inventory));
                    props.history.push('/inventories');
                }} />
        </div>
    </div>
);

export default connect()(InventoryCreate);