import React from 'react';
import CheckBox from '../Shared/CheckBox';
import TextBox from '../Shared/TextBox';
import Button from '../Shared/Button';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/users';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onLogin = (e) => {
        e.preventDefault();
        this.props.startLogin(this.state.email, this.state.password);
    };

    render() {
        return (
            <form onSubmit={this.onLogin}>
                <div className="card_body__form login__form">
                    <TextBox
                        placeholder="e-mail"
                        name="email"
                        value={this.state.email}
                        onChange={this.onEmailChange} />
                    <TextBox
                        placeholder="senha"
                        name="password"
                        isPassword={true}
                        value={this.state.password}
                        onChange={this.onPasswordChange} />
                    <CheckBox
                        name="keepLogged"
                        text="Mantenha-me logado" />
                    <Button
                        extraClasses="button--default button--m">
                        LOGIN
                    </Button>
                </div>
            </form>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginForm);