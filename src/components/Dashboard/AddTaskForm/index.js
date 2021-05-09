import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as styled from './styles';

const AddTaskForm = (props) => {
    const {
        taskName,
        taskDescription,
        taskDeadline,
        setTaskName,
        setTaskDescription,
        setTaskDeadline,
        add,
    } = props;

    const [name, setName] = useState(taskName);
    const [description, setDescription] = useState(taskDescription);
    const [deadline, setDeadline] = useState(taskDeadline);

    const onNameChange = (ev) => {
        setName(ev.target.value);
    };

    const onDescriptionChange = (ev) => {
        setDescription(ev.target.value);
    };

    const onDeadlineChange = (ev) => {
        setTaskDeadline(ev.target.value);
    };


    const onNameBlur = () => {
        setTaskName(name);
    };

    const onDescriptionBlur = () => {
        setTaskDescription(description);
    };

    const onDeadlineBlur = () => {
        setTaskDeadline(deadline);
    };

    const onDeadlineFocus = () => {
        document.getElementById("deadline").type = "date";
    }

    return (
        <styled.Wrapper>
            <styled.Header>
                Создание новой задачи
            </styled.Header>
            <styled.Input 
                value={name}
                type="text"
                placeholder="Название" 
                onChange={onNameChange}
                onBlur={onNameBlur}
            />
            <styled.Input 
                value={description}
                type="text"
                placeholder="Описание" 
                onChange={onDescriptionChange}
                onBlur={onDescriptionBlur}
            />
             <styled.Input 
                id="deadline"
                value={deadline}
                type="text"
                placeholder="Дедлайн" 
                onFocus={onDeadlineFocus}
                onChange={onDeadlineChange}
                onBlur={onDeadlineBlur}
            />
            <styled.Button onClick={add}> Создать </styled.Button>
        </styled.Wrapper>
    );
};

export default AddTaskForm;
