import React from 'react';

const TextBox = (props) => (
    <div className="card_body__form_row">
        <input
            type={props.isPassword ? "password" : "text"}
            className="card_body__text_box"
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange} />
    </div>
);

export default TextBox;