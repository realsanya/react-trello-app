import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: calc(100%-120px);
    align-items: center;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    margin: 60px;
`;

export const DashboardTitle = styled.div`
    display: flex;

    .project-name {
        font-family: 'Rubik Medium';
        font-weight: 400;
        font-size: 45px;
        color: #000;
    }

    img {
        margin-left: 30px;
    }
`;

export const DashboardUser = styled.div`
    display: flex;
    width: 300px;
    flex-direction: row;
    .dashboard-user-role {
        align-items: center;
        font-weight: 400;
        font-size: 25px;
        line-height: 60px;
        color: #CCCCCC;
        margin-right: 30px;
    }
`;
