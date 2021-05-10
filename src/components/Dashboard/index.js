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
import Modal from '../Modal';
import AddTaskForm from './AddTaskForm';
import Label from '../Label';
import TaskCard from '../TaskCard';


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
        tasks,
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

    const [status, setStatus] = useState([
        {id: 1, type: TODO_STATUS, tasks: tasks.filter((task) => task.status === 'TODO')},
        {id: 2, type: PAUSE_STATUS, tasks: tasks.filter((task) => task.status === 'PAUSE')},
        {id: 3, type: ACTIVE_STATUS, tasks: tasks.filter((task) => task.status === 'ACTIVE')},
        {id: 4, type: COMPLETED_STATUS, tasks: tasks.filter((task) => task.status === 'COMPLETED')},
    ]);

    const [currentStatus, setCurrentStatus] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);


    const dragOverHandler = (e) => {
        e.preventDefault();
        console.log('drag over handler');
        if (e.target.className === 'sc-dlVyqM gkBbAK') {
            e.target.style.boxShadow = '0 4px 3px gray';
        }

    };

    const dragLeaveHandler = (e) => {
        e.target.style.boxShadow = 'none';
    };

    const dragStartHandler = (e, s, task) => {
        setCurrentStatus(s);
        setCurrentTask(task);
    };

    const dragEndHandler = (e) => {
        e.target.style.boxShadow = 'none';
    };

    const dropHandler = (e, s, task) => {
        e.preventDefault();
        const currentIndex = currentStatus.tasks.indexOf(currentTask);
        currentStatus.tasks.splice(currentIndex, 1);
        const dropIndex = s.tasks.indexOf(task);
        s.tasks.splice(dropIndex + 1, 0, currentTask);
        setCurrentStatus(status.map((st) => {
            if (st.id === s.id) {
                return s;
            }
            if (st.id === currentStatus.id) {
                return currentStatus;
            }
            return st;
        }));
    };

    const dropTaskHandler = (e, s) => {
        e.preventDefault();
        s.tasks.push(currentTask);
        const currentIndex = currentStatus.tasks.indexOf(currentTask);
        currentStatus.tasks.splice(currentIndex, 1);
        setCurrentStatus(status.map((st) => {
            if (st.id === s.id) {
                return s;
            }
            if (st.id === currentStatus.id) {
                return currentStatus;
            }
            return st;
        }));
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
                        {status.map((s) => {
                            console.log(s);
                            return (
                                <styled.Column 
                                    type={s.type} 
                                    onDragOver={(e) => dragOverHandler(e)} 
                                    onDrop={(e) => dropTaskHandler(e, s)}
                                    >
                                    <Label type={s.type} count={s.tasks.length} /> 
                                    {s.tasks.map((task) => {
                                        console.log(task);
                                        return (
                                            <div 
                                                key={task.id}
                                                draggable={true} 
                                                onDragOver={(e) => dragOverHandler(e)} 
                                                onDragLeave={(e) => dragLeaveHandler(e)} 
                                                onDragStart={(e) => dragStartHandler(e, s, task)} 
                                                onDragEnd={(e) => dragEndHandler(e)}
                                                onDrop={(e) => dropHandler(e, s, task)}
                                                className="task"
                                            >
                                                <TaskCard 
                                                task={task}
                                                />
                                            </div>
                                            );
                                        })}
                                </styled.Column>
                            );
                        })}
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