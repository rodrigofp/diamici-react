import React from 'react';

const Title = (props) => (
    <div className="card_body__row">
        <h2 className="title">{props.children}</h2>
    </div>
);

export default Title;