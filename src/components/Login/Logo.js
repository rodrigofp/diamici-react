import React from 'react';

const Logo = (props) => (
    <div className="card_body__row">
        <img
            className="logo"
            src={props.src} />
    </div>
);

export default Logo;