import React from 'react';
import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProjectCard from '../ProjectCard';

const Home = () => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.Container>
                <Header 
                    title="Главная"
                    text="Александра"/>
                <styled.Workspace>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </styled.Workspace>
            </styled.Container>
        </styled.Wrapper>
    );
}

export default Home;