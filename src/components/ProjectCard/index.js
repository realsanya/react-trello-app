import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import api from  '../../axios/api-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as data from '../../redux/reducers/data';

import * as styled from './styles';
import Modal from '../Modal';
import AddMemberForm from './AddMemberForm';


const ProjectCard = (props) => {

    const {
        id,
        data,
        userData, 
        dashboardId,
        setDashboard,
        memberEmail,
    } = props;

    const [modalActive, setModalActive] = useState(false);
    const [addMemberModal, setAddMemberModal] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const getDashboard = () => {
        api()
        .get("/dashboard",  {
            params: {
                projectId: id,
                userId: userData.id,
            }
        })
        .then((response) => {
            setDashboard(response.data.id);
            setRedirect(true);
        });
    };

    const postDelete = () => {
        api()
        .post("/project/delete",  {
            id,
        })
    };

    const addMember = () => {
        api()
            .post("/project/member/add", {
                projectId: id,
                memberEmail: memberEmail,    
            })
    }

    const deleteProject = () => {
        if (userData.role !== 'ADMIN') {
            setModalActive(true);
        } else {
            postDelete();
        }
    }

    const renderAddMemberModal = () => {
        if (!addMemberModal) return null;
        return (
            <Modal active={addMemberModal} setActive={setAddMemberModal}>
                <AddMemberForm {...props} addMember={addMember} />
            </Modal>
        );
    };

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

    const path = redirect ? `/dashboard/${id}/${dashboardId}` : '/home';
    return (
        <styled.Wrapper>
            <styled.Header>
                    <Link className="link" to={{pathname: path}}> 
                <div onClick={getDashboard}> 
                        {data.name} 
                </div>
                    </Link>
            </styled.Header>
            <styled.Description>
                {data.description}
            </styled.Description>
            <styled.Actions>
                <styled.Action onClick={() => setAddMemberModal(true)}>Добавить участников</styled.Action>
                <styled.Action onClick={deleteProject}>Удалить</styled.Action>
            </styled.Actions>
            {renderAddMemberModal()}
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
        memberEmail: state.data.memberEmail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDashboard: bindActionCreators(data.setDashboard, dispatch),
        setMemberEmail: bindActionCreators(data.setMemberEmail, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (ProjectCard);