import React, { useRef, useState } from 'react';
import * as styled from './styles';
import { Redirect } from "react-router-dom";
import * as tokenService from "../../../services/TokenService";

const Form = (props) => {
    const {
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
            <Redirect to={"/main" } />
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