import React from 'react';
import * as styled from './styles';
import Sidebar from '../Sidebar';

const Home = () => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <h1>Ho,me</h1>
        </styled.Wrapper>
    );
}

export default Home;