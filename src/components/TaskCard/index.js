import React from 'react';

import * as styled from './styles';
import dateIcon from './icons/date.svg';
import attachmentsIcon from './icons/attachments.svg';
import commentsIcon from './icons/comments.svg';

const TaskCard = (props) => {

    const { 
        task
    } = props;


    return (
        <styled.Wrapper {...props}>
            <styled.Header>
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
        </styled.Wrapper>
    );
}

export default TaskCard;