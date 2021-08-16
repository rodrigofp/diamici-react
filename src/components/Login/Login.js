import React from 'react';
import LoginForm from './LoginForm';
import Logo from './Logo';
import LogoNoBg from '../../assets/images/logo-no-bg.png'

export default class Login extends React.Component {
    render() {
        return (
            <div className="card_body__content">
                <Logo src={LogoNoBg}/>
                <div className="card_body__row">
                    <LoginForm />
                </div>
            </div>
        );
    };
}