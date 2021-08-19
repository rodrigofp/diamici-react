import React from 'react';
import InventoryCard from './InventoryCard';
import { connect } from 'react-redux';
import { startRemoveInventory } from '../../actions/inventories';

export class InventoryList extends React.Component {
    onRemove = (id) => {
        this.props.startRemoveInventory({ id });
    };

    render() {
        return (
            <div className="card_body__row">
                {
                    this.props.inventories.map((inventory) =>
                        <InventoryCard
                            onRemove={this.onRemove}
                            key={inventory.id}
                            inventory={inventory} />
                    )
                }
            </div>
        );
    };
};
const mapStateToProps = (state, props) => {
    const inventories = state.inventories.filter((inv) => inv.userId == props.userId);
    return {
        inventories
    };
};

const mapDispatchToProps = (dispatch) => ({
    startRemoveInventory: ({id}) => dispatch(startRemoveInventory({id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);