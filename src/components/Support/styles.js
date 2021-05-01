import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    flex-direction: column;
`;

export const Workspace = styled.div`
    display: flex;
    width: calc(100%-40px);
    height: 100%;
    background-color: #E9E2F4;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow-y: auto;
    margin: 0 20px;
`;