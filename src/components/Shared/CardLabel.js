import React from 'react';

const CardLabel = (props) => (
    <div className="card_item__row">
        <div className={props.className}>
            {props.children}
        </div>
    </div>
);

export default CardLabel;