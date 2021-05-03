import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';

const ProjectCard = (props) => {
    const {
        data, 
    } = props;

    const addMember = () =>{ 
        console.log(data.id);
    }
    
    return (
        <styled.Wrapper>
            <styled.Header>
                {data.name}
            </styled.Header>
            <styled.Description>
                {data.description}
            </styled.Description>
            <styled.Actions>
                <styled.Action onClick={addMember}>Добавить участников</styled.Action>
                <styled.Action>Удалить</styled.Action>
            </styled.Actions>
        </styled.Wrapper>
    );
}

ProjectCard.propsType = {
    data: PropTypes.shape().isRequired,
}

export default ProjectCard;