import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import api from  '../../axios/api-config';
import { bindActionCreators } from 'redux';
import * as task from '../../redux/reducers/task';
import * as data from '../../redux/reducers/data';
import * as tokenService from "../../services/TokenService";

import Sidebar from '../Sidebar';
import Header from '../Header';
import Column from '../Column';
import Modal from '../Modal';
import AddTaskForm from './AddTaskForm';

import * as styled from './styles';
import {
    TODO_STATUS,
    PAUSE_STATUS,
    ACTIVE_STATUS,
    COMPLETED_STATUS,
} from '../../utils/constants';

const Dashboard = (props) => {

    const {
        userId,
        userInfo,
        taskName,
        taskDescription,
        taskDeadline,
        setTasks, 
        dashboardId,
    } = props;

    let urlElements = window.location.href.split('/');
    const projectId = urlElements[4];

    const [modalActive, setModalActive] = useState(false);

    const getTasks = () => {
        api()
            .get("/task/all",  {
            params: {
               dashboardId,
            }
            })
            .then((response) => {
                setTasks(response.data.content);
        });
   }

   useEffect(() => {
        getTasks();
   }, [])

    const addTask = () => {
        api()
            .post("/task/add",  {
                taskName,
                taskDescription,
                taskDeadline,
                userId,
        })
    };

    const renderAddTaskModal = () => {
        if (!modalActive) return null;
        return(
            <Modal active={modalActive} setActive={setModalActive}>
                <AddTaskForm {...props} add={addTask} />
            </Modal>
        );
    };

    return (
        <>
        {tokenService.isTokenPresent() ? (
            <styled.Wrapper>
                <Sidebar />
                <styled.Container>
                    <Header 
                        title="Новый проект"
                        text={userInfo.role === 'USER' ? "Разработчик" : "Администратор"}
                        setModalActive={setModalActive} 
                        isDashboard
                    />
                    <styled.Workspace>
                        <Column type={TODO_STATUS} />
                        <Column type={PAUSE_STATUS} />
                        <Column type={ACTIVE_STATUS} />
                        <Column type={COMPLETED_STATUS} />
                    </styled.Workspace>
                </styled.Container>
                {renderAddTaskModal()}
            </styled.Wrapper> 
        ) : (
            <Redirect to={"/signIn" } />
        )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      userId: state.auth.userData.id,
      userInfo: state.auth.userData,
      projects: state.data.projects,
      dashboardId: state.data.dashboardId,

      tasks: state.task.tasks,
      taskName: state.task.taskName,
      taskDescription: state.task.taskDescription,
      taskDeadline: state.task.taskDeadline,
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        setTasks: bindActionCreators(task.setTasks, dispatch),
        setTaskName: bindActionCreators(task.setTaskName, dispatch),
        setTaskDescription: bindActionCreators(task.setTaskDescription, dispatch),
        setTaskDeadline: bindActionCreators(task.setTaskDeadline, dispatch),
        setDashboard: bindActionCreators(data.setDashboard, dispatch),
    };
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);