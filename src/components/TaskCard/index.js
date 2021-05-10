import React, { useState } from 'react';

import * as styled from './styles';
import dateIcon from './icons/date.svg';
import attachmentsIcon from './icons/attachments.svg';
import commentsIcon from './icons/comments.svg';
import Modal from '../Modal';
import TaskView from './TaskView';

const TaskCard = (props) => {

    const { 
        task
    } = props;

    const [taskViewModal, setTaskViewModal] = useState(false);

    const renderTaskView = () => {
        console.log('render');
        if (!taskViewModal) return null;
        return (
            <Modal active={taskViewModal} setActive={setTaskViewModal}>
                <TaskView task={task} />
            </Modal>
        );
    };


    return (
        <styled.Wrapper {...props}>
            <styled.Header onClick={() => setTaskViewModal(true)}>
                {task.name}
            </styled.Header>
            <styled.Description>
                {task.description}
            </styled.Description>
            <styled.Info>
                <div className="deadline">
                    <img src={dateIcon}/>
                    <p>Июль 1</p>
                </div>
                <div className="attachments">
                    <img src={attachmentsIcon}/>
                    <p>1</p>
                </div>
                <div className="comments">
                    <img src={commentsIcon}/>
                    <p>2</p>
                </div>
            </styled.Info>
            {renderTaskView()}
        </styled.Wrapper>
    );
}

export default TaskCard;