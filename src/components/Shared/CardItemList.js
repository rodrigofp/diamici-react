import React from 'react';
import CardItem from './CardItem';

const CardItemList = (props) => (
    <div className="card_form__list">
        {
            props.listItems.map((item, index) => (
                <CardItem
                    key={index}
                    handleRemove={props.handleRemove}
                    labelText={item} />
            ))
        }
    </div>
);

export default CardItemList;