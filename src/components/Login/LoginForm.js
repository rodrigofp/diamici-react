import React from 'react';
import CheckBox from '../Shared/CheckBox';
import TextBox from '../Shared/TextBox';
import Button from '../Shared/Button';

const LoginForm = () => (
    <form>
        <div className="card_body__form login__form">
            <TextBox
                placeholder="e-mail"
                name="email" />
            <TextBox
                placeholder="senha"
                name="password"
                isPassword={true} />
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

export default LoginForm;