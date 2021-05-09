import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import api from  '../../axios/api-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as data from '../../redux/reducers/data';

import * as styled from './styles';
import Modal from '../Modal';


const ProjectCard = (props) => {

    const {
        id,
        data,
        userData, 
        dashboardId,
        setDashboard,
    } = props;

    const [modalActive, setModalActive] = useState(false);

    const getDashboard = () => {
        console.log('get dash');
        api()
        .get("/dashboard",  {
            params: {
                projectId: id,
                userId: userData.id,
            }
        })
        .then((response) => {
            setDashboard(response.data.id);
        });
    }

    const postDelete = () => {
        api()
        .post("/project/delete",  {
            id,
        })
    }

    const addMember = () => {
        console.log('add member');
    }

    const deleteProject = () => {
        if (userData.role !== 'ADMIN') {
            setModalActive(true);
        } else {
            postDelete();
        }
    }

    const renderHaveNotAccessModal = () => {
       if (!modalActive) return null;
       return (
           <Modal active={modalActive} setActive={setModalActive}>
               <styled.Alert>
                  <p> У вас недостаточно прав :( </p>
               </styled.Alert>
           </Modal>
       );
    }

    return (
        <styled.Wrapper>
            <styled.Header onClick={getDashboard}>
                <Link to={{pathname: `/dashboard/${id}/${dashboardId}`}}> {data.name} </Link>
            </styled.Header>
            <styled.Description>
                {data.description}
            </styled.Description>
            <styled.Actions>
                <styled.Action onClick={addMember}>Добавить участников</styled.Action>
                <styled.Action onClick={deleteProject}>Удалить</styled.Action>
            </styled.Actions>
            {renderHaveNotAccessModal()}
        </styled.Wrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
        dashboardId: state.data.dashboardId,
        description: state.data.description,
        name: state.data.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDashboard: bindActionCreators(data.setDashboard, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (ProjectCard);