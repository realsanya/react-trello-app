import React, { useState } from 'react';
import * as styled from './styles';

const Form = (props) => {
    const {
        name,
        surname,
        email,
        dateOfBirth,
        password,
        confirmPassword,
        setName,
        setSurname,
        setEmail,
        setDateOfBirth,
        setPassword,
        setConfirmPassword,
        send,
    } = props;

    const [nameValue, setNameValue] = useState(name);
    const [surnameValue, setSurnameValue] = useState(surname);
    const [emailValue, setEmailValue] = useState(email);
    const [dateOfBirthValue, setDateOfBirthValue] = useState(dateOfBirth);
    const [passwordValue, setPasswordValue] = useState(password);
    const [confirmPasswordValue, setConfirmPasswordValue] = useState(confirmPassword);

    const onNameChange = (ev) => {
        setNameValue(ev.target.value);
    };

    const onSurnameChange = (ev) => {
        setSurnameValue(ev.target.value);
    };

    const onEmailChange = (ev) => {
        setEmailValue(ev.target.value);
    };

    const onDateOfBirthChange = (ev) => {
        setDateOfBirthValue(ev.target.value);
    };

    const onPasswordChange = (ev) => {
        setPasswordValue(ev.target.value);
    };

    const onConfirmPasswordChange = (ev) => {
        setConfirmPasswordValue(ev.target.value);
    };

    const onNameBlur = () => {
        setName(nameValue);
    };

    const onSurnameBlur = () => {
        setSurname(surnameValue);
    };

    const onEmailBlur = () => {
        setEmail(emailValue);
    };

    const onDateOfBirthBlur = () => {
        setDateOfBirth(dateOfBirthValue);
    };

    const onPasswordBlur = () => {
        setPassword(passwordValue);
    };

    const onConfirmPasswordBlur = () => {
        setConfirmPassword(confirmPasswordValue);
    };

    const onDateOfBirthFocus = () => {
        document.getElementById("dateOfBirth").type = "date";
    };

    return (
        <>
            <styled.Fields>
                <styled.Input 
                    value={nameValue}
                    type="text"
                    placeholder="Имя" 
                    onChange={onNameChange}
                    onBlur={onNameBlur} />
                <styled.Input 
                    value={surnameValue}
                    type="text"
                    placeholder="Фамилия" 
                    onChange={onSurnameChange} 
                    onBlur={onSurnameBlur} />
            </styled.Fields>
            <styled.Fields>
                <styled.Input 
                    value={emailValue}
                    type="email"
                    placeholder="Почта"
                    onChange={onEmailChange}
                    onBlur={onEmailBlur}/>
                <styled.Input 
                    id="dateOfBirth"
                    value={dateOfBirthValue}
                    placeholder="Дата рождения"
                    onFocus={onDateOfBirthFocus}
                    onChange={onDateOfBirthChange}
                    onBlur={onDateOfBirthBlur}/>
            </styled.Fields>
            <styled.Fields>
                <styled.Input
                    value={passwordValue}
                    type="password"
                    placeholder="Пароль" 
                    onChange={onPasswordChange}
                    onBlur={onPasswordBlur}/>
                <styled.Input 
                    value={confirmPasswordValue}
                    type="password"
                    placeholder="Повторите пароль"
                    onChange={onConfirmPasswordChange}
                    onBlur={onConfirmPasswordBlur}/>
            </styled.Fields>
            <styled.Button onClick={send}>Зарегистрироваться</styled.Button>
        </>
    );
}

export default Form;