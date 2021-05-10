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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100%-40px);
    height: 100%;
    background-color: #E9E2F4;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow-y: auto;
    margin: 0 20px;

    img {
        width: 200px;
        height: 200px;
    }

    p {  
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        font-family: 'Rubik Medium';
        font-weight: 400;
        font-size: 20px;
        margin: 40px 80px;
        color: #C1C6C9;
    }

    a {
        font-family: 'Rubik Light';
        font-weight: 400;
        font-size: 20px;
        color: #CCC;
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

`;