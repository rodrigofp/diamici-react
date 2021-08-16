import React from 'react';

const SelectBox = (props) => (
    <div className="select__trigger">
        <span>{props.firstLine}</span>
        <div className="select__arrow"></div>
    </div>
);

export default SelectBox;