import React from 'react';
import CardItem from './CardItem';

const CardItemList = (props) => (
    <div className="card_form__list">
        {
            props.listItems.map((item) => (
                <CardItem
                    handleRemove={props.handleRemove}
                    labelText={item} />
            ))
        }
    </div>
);

export default CardItemList;