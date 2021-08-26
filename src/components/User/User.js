import React from 'react';
import { connect } from 'react-redux';
import Title from '../Shared/Title';
import { startLogout } from '../../actions/users';
import Button from '../Shared/Button';
import CardLabel from '../Shared/CardLabel';

export class User extends React.Component {
    onLogout = () => {
        this.props.startLogout();
    };

    render() {
        console.log(this.props.user);
        return (
            <div className="card_body__content">
                <Title>Informações da {this.props.user.name}</Title>
                <div className="card_body__row">
                    <Button
                        handleClick={this.onLogout}
                        extraClasses="button--default button--m">
                        SAIR
                    </Button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    user: state.users.users.find((u) => u.id === state.users.uid)
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);