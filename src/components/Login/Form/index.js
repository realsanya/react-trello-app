import React, { useRef, useState } from 'react';
import { Redirect } from "react-router-dom";
import * as tokenService from "../../../services/TokenService";

import * as styled from './styles';

const Form = (props) => {
    const {
        id,
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        send,
    } = props;

    const [email, setEmail] = useState(loginEmail);
    const [password, setPassword] = useState(loginPassword); 
    
    const onEmailChange = (ev) => {
        console.log(ev.target.value);
        setEmail(ev.target.value);
    };
    
    const onPasswordChange = (ev) => {
        setPassword(ev.target.value);
    };

    const onEmailBlur = () => {
        setLoginEmail(email);
    }

    const onPasswordBlur = () => {
        setLoginPassword(password);
    }

    return (
        <>
        {tokenService.isTokenPresent() ? (
            <Redirect to={"/home" } />
        ) : (
            <>
                <styled.Input 
                    value={email}
                    type="email"
                    placeholder="Почта" 
                    onChange={onEmailChange} 
                    onBlur={onEmailBlur} />
                <styled.Input 
                    value={password}
                    type="password"
                    placeholder="Пароль"
                    onChange={onPasswordChange} 
                    onBlur={onPasswordBlur} />
                <styled.Button onClick={send}>Войти</styled.Button>
            </> 
        )}
      </>
    );
}

export default Form;