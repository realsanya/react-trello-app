import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from  '../../axios/api-config';
import * as data from '../../redux/reducers/data';
import * as tokenService from "../../services/TokenService";


import Sidebar from '../Sidebar';
import Header from '../Header';
import ProjectCard from '../ProjectCard';
import Modal from '../Modal';
import Form from './Form';

import * as styled from './styles';
import notFoundIcon from './icons/notFound.svg';

const Home =  (props) => {

    const [modalActive, setModalActive] = useState(false);

    const {
        userId,
        userData,
        name, 
        description,
        projects,
        setProjects,
    } = props;


    const getProjects = () => {
        api()
            .get("/projects",  {
                params: {
                userId,
                }
            })
            .then((response) => {
                setProjects(response.data.content);
            });
    };

    const addProject = () => {
        api()
            .post("/project/add",  {
                name,
                description,
                userId,
        });
        // TODO close modal window
    };

    useEffect(() => {
        getProjects();
    }, []);

    const renderCreateProjectModal = () => {
        if (!modalActive) return null;
        return(
            <Modal active={modalActive} setActive={setModalActive}>
                <Form 
                  { ...props }
                  create={addProject} />
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
                        title="Главная"
                        text={userData.name}
                        setModalActive={setModalActive}
                        isHome
                        />
                        {projects.length !== 0 ? (
                            <styled.Workspace>
                                {projects.map((project) => {
                                    return (
                                        <ProjectCard key={project.id} id={project.id} data={project} />
                                    );
                                })}
                            </styled.Workspace>
                        ) : (
                            <styled.Workspace isNotFound>
                                <img src={notFoundIcon}/>
                                <p> Существующих проектов нет. 
                                    Не расстраивайтесь! Всё еще впереди :)</p>
                            </styled.Workspace>
                        )}
                    </styled.Container>
                {renderCreateProjectModal()}
            </styled.Wrapper>
        ) : (
            <Redirect to={"/signIn" } />
        )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        projects: state.data.projects,
        userId: state.auth.userData.id,
        userData: state.auth.userData,
        name: state.data.name,
        description: state.data.description,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProjects: bindActionCreators(data.setProjects, dispatch),
        setName: bindActionCreators(data.setName, dispatch),
        setDescription: bindActionCreators(data.setDescription, dispatch),
        setDashboard: bindActionCreators(data.setDashboard, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);