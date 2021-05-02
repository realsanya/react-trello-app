import React from 'react';

import * as styled from './styles';
import dateIcon from './icons/date.svg';
import attachmentsIcon from './icons/attachments.svg';
import commentsIcon from './icons/comments.svg';

const TaskCard = () => {
    return (
        <styled.Wrapper>
            <styled.Header>
            YearCalendar: Календарь на год
            </styled.Header>
            <styled.Description>
            Содержит календарь на текущий год. Перемещение по годам - по нажатию на стрелки значка календаря.
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