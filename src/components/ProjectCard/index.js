import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as styled from './styles';

import api from  '../../axios/api-config';
import { setDashboard } from '../../redux/reducers/data';

const ProjectCard = (props) => {
    const {
        data, 
    } = props;

    const getDashboard = () => {
        api()
        .get("/dashboard",  {
            params: {
                projectId: data.id,
                userId: 1
            }
        })
        .then((response) => {
            setDashboard(response.data.content);
        });
    }

    const openDashboard = () => {
        console.log('open dash');
        getDashboard();
    }

    const addMember = () =>{ 
        console.log(data.id);
    }
    
    return (
        <styled.Wrapper onClick={openDashboard}>
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


const mapStateToProps = (state) => {
    return {
        dashboard: state.data.dashboard,
    };
};

const mapDispatchToProps = {
    setDashboard,
};


export default connect(mapStateToProps, mapDispatchToProps) (ProjectCard);