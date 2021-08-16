import React from 'react';
import SelectBox from './SelectBox';
import SelectOption from './SelectOption';

export default class Select extends React.Component {
    state = {
        open: false
    }

    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }));

    render() {
        return(
            <div className="card_body__row">
                <div className="card_body__form_row">
                    <div className="select__wrapper">
                        <div
                            onClick={this.handleClick}
                            className={`select ${this.state.open ? 'open' : ''}`}>
                            <SelectBox firstLine={this.props.firstLine} />
                            <div className="select__options">
                                {
                                    this.props.options.map((option) =>
                                        <SelectOption
                                            handleClick={this.props.handleOptionClick}
                                            key={option.id}
                                            option={option}>
                                            {option.value}
                                        </SelectOption>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};