import React from 'react';
import api from  '../../axios/api-config';
import { setProjects } from '../../redux/reducers/data';
import * as tokenService from "../../services/TokenService";
import { connect } from 'react-redux';
import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProjectCard from '../ProjectCard';
import addIcon from './add.svg';
import notFoundIcon from './notFound.svg';
import { withRouter } from 'react-router';

class Home extends React.Component {
    getProjects = () => {
        api()
        .get("/projects/" + this.props.match.params.userId)
        .then((response) => {
            this.props.setProjects(response.data.content);
        });
    };

    componentDidMount() {
        this.getProjects();
    }
      
    render() {
        const { userInfo } = this.props;
        const projects = this.props.projects;
        return (
              <styled.Wrapper>
                  <Sidebar />
                  <styled.Container>
                      <Header 
                          title="Главная"
                          text={userInfo.name}
                          icon={addIcon}/>
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
              </styled.Wrapper>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userData,
        projects: state.data.projects,
    };
};

const mapDispatchToProps = {
    setProjects
};

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Home));