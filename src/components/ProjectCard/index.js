import React from 'react';
import * as styled from './styles';

const ProjectCard = () => {
    return (
        <styled.Wrapper>
            <styled.Header>
                Новый проект
            </styled.Header>
            <styled.Description>
                tesettesttestetstesettesttestetstesettesttestetstesettesttestetstesettesttestetstesettesttestets
            </styled.Description>
            <styled.Actions>
                <styled.Action>Добавить участников</styled.Action>
                <styled.Action>Удалить</styled.Action>
            </styled.Actions>
        </styled.Wrapper>
    );
}

export default ProjectCard;