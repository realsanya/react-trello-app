import React from 'react';
import api from  '../../axios/api-config';
import { setAllProjects, setProjects } from '../../redux/reducers/data';
import { connect } from 'react-redux';
import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProjectCard from '../ProjectCard';
import addIcon from './add.svg';

class Home extends React.Component {
    getAllProjects = () => {
        api()
          .get("/proj")
          .then((response) => {
            this.props.setProjects(response.data.content);
        });
    };

    // TODO
    getProjects = () => {
        api()
          .get("/projects", {
            userId: 6,
            // role,
          })
          .then((response) => {
            this.props.setProjects(response.data.content);
        });
    };

    componentDidMount() {
       this.getAllProjects();
        // this.getProjects();
    }
    
      render() {
        //   const projects = this.props.allProjects;
          const projects = this.props.projects;

          return (
              <styled.Wrapper>
                  <Sidebar />
                  <styled.Container>
                      <Header 
                          title="Главная"
                          text="Александра"
                          icon={addIcon}/>
                      <styled.Workspace>
                          {projects.map((project) => {
                              return (
                                  <ProjectCard key={project.id} data={project} />
                              );
                          })}
                      </styled.Workspace>
                  </styled.Container>
              </styled.Wrapper>
          );
    }
}

const mapStateToProps = (state) => {
    return {
    //   allProjects: state.data.projects,
      projects: state.data.projects,
    };
};

export default connect(mapStateToProps, { setAllProjects, setProjects })(Home);