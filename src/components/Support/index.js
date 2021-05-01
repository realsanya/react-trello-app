import React from 'react';
import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Support =  () => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.Container>
                <Header 
                    title="Поддержка" 
                    text="Разработчик"/>
                <styled.Workspace>
                    
                </styled.Workspace>
            </styled.Container>
        </ styled.Wrapper>
    );
}

export default Support;