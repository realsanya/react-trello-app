import React from 'react';
import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Settings = () => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.Container>
                <Header 
                    title="Настройки"
                    text="Разработчик"/>
                <styled.Workspace>
                   
                </styled.Workspace>
            </styled.Container>
       </styled.Wrapper>
    );
}

export default Settings;