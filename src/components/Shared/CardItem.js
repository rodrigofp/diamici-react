import React from 'react';
import Button from './Button';
import Minus from '../../assets/images/minus.png'

export default class CardItem extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleRemove(this.props.labelText);
    }

    render() {
        return (
            <div className="card_list_item__row">
                <div className="card_item__label">
                    {this.props.labelText}
                </div>
                <Button
                    handleClick={this.handleClick}
                    extraClasses="button--rounded button--s button--red">
                    <img src={Minus} />
                </Button>
            </div>
        );
    };
};