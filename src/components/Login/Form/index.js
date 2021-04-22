import React from 'react';
import * as styled from './styles';

const Form = (props) => {

    const {
        email,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        send,
    } = props;

    console.log(email);

    let emailRef = React.createRef();
    let passwordRef = React.createRef();

    const onEmailChange = () => {
        const inputVal = emailRef.current.value;
        console.log(inputVal);
        setLoginEmail(inputVal);
    };

    const onPasswordChange = () => {
        const inputVal = passwordRef.current.value;
        console.log(inputVal);
        setLoginPassword(inputVal);
    };

    return (
        <>
            <styled.Input 
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                type="email"
                placeholder="Почта" />
            <styled.Input 
                onChange={onPasswordChange}
                value={loginPassword}
                ref={passwordRef}
                type="password"
                placeholder="Пароль"/>
            <styled.Button onClick={send}>Войти</styled.Button>
        </>
    );
}

export default Form;