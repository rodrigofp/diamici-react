import React from 'react';
import { connect } from 'react-redux';
import Title from '../Shared/Title';
import { startLogout } from '../../actions/users';
import Button from '../Shared/Button';

export class User extends React.Component {
    onLogout = () => {
        this.props.startLogout();
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>Informações do usuário</Title>
                <div className="card_body__row">
                    <div className="card_body__form_row">
                    <Button
                        handleClick={this.onLogout}
                        extraClasses="button--default button--m">
                        SAIR
                    </Button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(User);