import React from 'react';

const CheckBox = (props) => (
    <div className="card_body__form_row">
        <input
            type="checkbox"
            name={props.name}
            className="card_body__check_box" />
        <label
            className="card_body__check_box_text"
            for={props.name}>{props.text}</label>
    </div>
);

export default CheckBox;