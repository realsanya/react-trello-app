import React from 'react';
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

    console.log(name);

    let nameRef = React.createRef();
    let surnameRef = React.createRef();
    let emailRef = React.createRef();
    let dateOfBirthRef = React.createRef();
    let passwordRef = React.createRef();
    let confirmPasswordRef = React.createRef();

    const onNameChange = () => {
        const inputVal = nameRef.current.value;
        console.log(inputVal);
        setName(inputVal);
    };

    const onSurnameChange = () => {
        const inputVal = surnameRef.current.value;
        setSurname(inputVal);
    };

    const onEmailChange = () => {
        const inputVal = emailRef.current.value;
        setEmail(inputVal);
    };

    const onDateOfBirthChange = () => {
        const inputVal = dateOfBirthRef.current.value;
        setDateOfBirth(inputVal);
    };

    const onPassword = () => {
        const inputVal = passwordRef.current.value;
        setPassword(inputVal);
    };

    const onConfirmPassword = () => {
        const inputVal = confirmPasswordRef.current.value;
        setConfirmPassword(inputVal);
    };

    const onDateOfBirthFocus = () => {
        document.getElementById("dateOfBirth").type = "date";
    };

    return (
        <>
            <styled.Fields>
                <styled.Input 
                    onChange={onNameChange}
                    value={name}
                    ref={nameRef}
                    type="text"
                    placeholder="Имя" />
                <styled.Input 
                    onChange={onSurnameChange}
                    value={surname}
                    ref={surnameRef}
                    type="text"
                    placeholder="Фамилия" />
            </styled.Fields>
            <styled.Fields>
                <styled.Input 
                    onChange={onEmailChange}
                    value={email}
                    ref={emailRef}
                    type="email"
                    placeholder="Почта"/>
                <styled.Input 
                    id="dateOfBirth"
                    onChange={onDateOfBirthChange}
                    value={dateOfBirth}
                    ref={dateOfBirthRef}
                    onFocus={onDateOfBirthFocus}
                    // type="date"
                    placeholder="Дата рождения"/>
            </styled.Fields>
            <styled.Fields>
                <styled.Input
                    onChange={onPassword}
                    value={password}
                    ref={passwordRef} 
                    type="password"
                    placeholder="Пароль" />
                <styled.Input 
                    onChange={onConfirmPassword}
                    value={confirmPassword}
                    ref={confirmPasswordRef}
                    type="password"
                    placeholder="Повторите пароль"/>
            </styled.Fields>
            <styled.Button onClick={send}>Зарегистрироваться</styled.Button>
        </>
    );
}

export default Form;