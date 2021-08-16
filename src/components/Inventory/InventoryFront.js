import React from 'react';
import CardLabel from '../Shared/CardLabel';

const InventoryFront = (props) => (
    <div
        className="card__item--front"
        onClick={props.handleClick} >
        <CardLabel className="inventory__identifier">
            {`${props.inventory.identifier} | ${props.inventory.name}`}
        </CardLabel>
        <CardLabel className="inventory__color_size">
            {`COR: ${props.inventory.color} | TAMANHO: ${props.inventory.size}`}
        </CardLabel>
        <CardLabel className="inventory__quantity">
            {`${props.inventory.quantity} PEÇAS`}
        </CardLabel>
    </div>
);

export default InventoryFront;