import React from 'react';
import InventoryCard from './InventoryCard';

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

export default InventoryList;