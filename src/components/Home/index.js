import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from  '../../axios/api-config';
import { 
    setProjects, 
    setName,
    setDescription,
    setDashboard,
} from '../../redux/reducers/data';

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
        name, 
        description,
        projects,
    } = props;

    const userId = 2;

    const getProjects = () => {
        api()
        .get("/projects",  {
            params: {
              userId: 2
            }
        })
        .then((response) => {
            setProjects(response.data.content);
        });
    };

    const addProject = () => {
        console.log('create');
        api()
            .post("/add",  {
                name,
                description,
                userId,
            })
    };

    useEffect(() => {
        getProjects();
    });


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
        <styled.Wrapper>
            <Sidebar />
                <styled.Container>
                  <Header 
                    title="Главная"
                    text="Александра"
                    setModalActive={setModalActive}
                    isHome
                    />
                    {projects.length !== 0 ? (
                        <styled.Workspace>
                            {projects.map((project) => {
                                return (
                                    <ProjectCard key={project.id} data={project} />
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

const mapDispatchToProps = {
    setProjects,
    setName,
    setDescription,
    setDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);