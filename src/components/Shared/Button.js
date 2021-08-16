import React from 'react';

const Button = (props) => (
    <div className="card_body__form_row">
        <button
            onClick={props.handleClick}
            className={`card_body__button ${props.extraClasses}`}>
            {props.children}
        </button>
    </div>
);

export default Button;