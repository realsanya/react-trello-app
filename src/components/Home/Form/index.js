import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as styled from './styles';

const Form = (props) => {
    const {
        name,
        description,
        setName,
        setDescription,
        create,
    } = props;

    const [nameValue, setNameValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    const onNameChange = (ev) => {
        setNameValue(ev.target.value);
    };

    const onDescriptionChange = (ev) => {
        setDescriptionValue(ev.target.value);
    };

    const onNameBlur = () => {
        setName(nameValue);
    };

    const onDescriptionBlur = () => {
        setDescription(descriptionValue);
    };

    return (
        <styled.Wrapper>
            <styled.Header>
                Создание нового проекта
            </styled.Header>
            <styled.Input 
                value={nameValue}
                type="text"
                placeholder="Название" 
                onChange={onNameChange}
                onBlur={onNameBlur}
            />
            <styled.Input 
                value={descriptionValue}
                type="text"
                placeholder="Описание" 
                onChange={onDescriptionChange}
                onBlur={onDescriptionBlur}
            />
            <styled.Button onClick={create}> Создать </styled.Button>
        </styled.Wrapper>
    );
};

export default Form;
