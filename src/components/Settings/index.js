import React from 'react';
import * as styled from './styles';
import Sidebar from '../Sidebar';

const Settings = () => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <h1>Settings</h1>
       </styled.Wrapper>
    );
}

export default Settings;