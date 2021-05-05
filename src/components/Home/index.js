import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, generatePath } from 'react-router';
import api from  '../../axios/api-config';
import { setProjects, setDashboard } from '../../redux/reducers/data';
import { setUserData } from '../../redux/reducers/auth';
import * as tokenService from "../../services/TokenService";

import Sidebar from '../Sidebar';
import Header from '../Header';
import ProjectCard from '../ProjectCard';
import Modal from '../Modal';
import * as styled from './styles';
import notFoundIcon from './notFound.svg';

const Home =  (props) => {

    const [modalActive, setModalActive] = useState(false);

    const getProjects = () => {
        api()
        .get("/projects",  {
            params: {
              userId: 1
            }
        })
        .then((response) => {
            setProjects(response.data.content);
        });
    };

    useEffect(() => {
        getProjects();
    });
        const { userData } = props;
        const projects = props.projects;
        return (
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
                        <Modal active={modalActive} setActive={setModalActive} />
                  </styled.Container>
              </styled.Wrapper>
          );
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userData.id,
        userData: state.auth.userData,
        projects: state.data.projects,
    };
};

const mapDispatchToProps = {
    setProjects,
    setDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Home));