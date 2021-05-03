import React, { useState } from 'react';
import * as styled from './styles';

const Form = (props) => {
    const {
        name,
        surname,
        email,
        dateOfBirth,
        setName,
        setSurname,
        setEmail,
        setDateOfBirth,
        update,
        logout,
    } = props;

    const [nameValue, setNameValue] = useState(name);
    const [surnameValue, setSurnameValue] = useState(surname);
    const [emailValue, setEmailValue] = useState(email);
    const [dateOfBirthValue, setDateOfBirthValue] = useState(dateOfBirth);

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

    const onDateOfBirthFocus = () => {
        document.getElementById("dateOfBirth").type = "date";
    };

    return (
        <>
          <styled.Wrapper>
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
                    <styled.Button onClick={update}>Обновить</styled.Button>
                </styled.Fields>
                <styled.Fields>
                    <styled.Input x
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
                    <styled.Button onClick={logout} logout>Выход</styled.Button>
                </styled.Fields>
            </styled.Wrapper>
        </>
    );
}

export default Form;