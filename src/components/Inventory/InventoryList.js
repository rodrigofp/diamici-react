import React from 'react';
import InventoryCard from './InventoryCard';
import { connect } from 'react-redux';
import { removeInventory } from '../../actions/inventories';

const InventoryList = (props) => (
    <div className="card_body__row">
        {
            props.inventories.map((inventory) =>
                <InventoryCard
                    key={inventory.id}
                    inventory={inventory} />
            )
        }
    </div>
);

const mapStateToProps = (state, props) => {
    const inventories = state.inventories.filter((inv) => inv.userId == props.userId);
    return {
        inventories
    };
};

export default connect(mapStateToProps)(InventoryList);