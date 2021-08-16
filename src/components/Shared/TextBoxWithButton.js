import React from 'react';
import Button from './Button';
import Add from '../../assets/images/add.png';

export default class 
TextBoxWithButton extends React.Component {
    state = {
        error: undefined
    };

    handleClick = (e) => {
        e.preventDefault();
        const item = document.getElementsByName(this.props.name)[0].value;
        const error = this.props.handleClick(item)
        if (error) alert(error);
        this.setState(() => ({ error }));
        document.getElementsByName(this.props.name)[0].value = '';
    }

    render() {
        return (
            <div className="card_body__form_row">
                <input
                    type="text"
                    className="card_body__text_box text_box--with_button"
                    placeholder={this.props.placeholder}
                    name={this.props.name} />
                <Button
                    handleClick={this.handleClick}
                    extraClasses={`button--inside button--rounded button--s button--green`}>
                    <img src={Add} />
                </Button>
            </div>
        );
    }
};