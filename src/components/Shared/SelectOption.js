import React from 'react';

const SelectOption = (props) => (
    <div
        onClick={(e) => {
            e.preventDefault();
            props.handleClick(props.option);
        }}
        className={`option ${props.option.isSelected ? 'selected' : ''}`} id={props.option.id}>
        {props.children}
    </div>
);

export default SelectOption;