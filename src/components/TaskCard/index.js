import React, { useState, useEffect } from 'react';

import * as styled from './styles';
import dateIcon from './icons/date.svg';
import attachmentsIcon from './icons/attachments.svg';
import commentsIcon from './icons/comments.svg';
import Modal from '../Modal';
import TaskView from './TaskView';
import CommentView from './CommentView';
import AttachmentView from './AttachmentView';
import api from '../../axios/api-config';

const TaskCard = (props) => {

    const { 
        task,
    } = props;

    const taskDeadline = task.dateOfEnd.substr(0, 10);

    const [taskViewModal, setTaskViewModal] = useState(false);
    const [attachmentModal, setAttachmentModal] = useState(false);
    const [commentModal, setCommentModal] = useState(false);

    const renderTaskView = () => {
        if (!taskViewModal) return null;
        return (
            <Modal active={taskViewModal} setActive={setTaskViewModal}>
                <TaskView task={task} />
            </Modal>
        );
    };

    const renderAttachmentModal = () => {
        if (!attachmentModal) return null;
        return (
            <Modal active={attachmentModal} setActive={setAttachmentModal}>
                <AttachmentView task={task} />
            </Modal>
        );
    };
    
    const renderCommentModal = () => {
        if (!commentModal) return null;
        return (
            <Modal active={commentModal} setActive={setCommentModal}>
                <CommentView task={task}/>
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
                    <p>{taskDeadline}</p>
                </div>
                <div className="attachments" onClick={() => setAttachmentModal(true)}>
                    <img src={attachmentsIcon}/>
                </div>
                <div className="comments" onClick={() => setCommentModal(true)}>
                    <img src={commentsIcon}/>
                </div>
            </styled.Info>
            {renderTaskView()}
            {renderAttachmentModal()}
            {renderCommentModal()}
        </styled.Wrapper>
    );
}

export default TaskCard;