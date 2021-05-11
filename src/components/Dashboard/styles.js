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
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100%/4);
    height: 100%;
    margin: 20px 15px;
`;

// export const Header = styled.div`
//     display: flex;
//     width: 100%;
//     align-items: center;
//     height: 60px;
//     flex-direction: row;
//     justify-content: space-between;
//     margin: 60px;

//     .project-name {
//         font-family: 'Rubik Medium';
//         font-weight: 400;
//         font-size: 45px;
//         color: #000;
//     }
// `;

// export const DashboardUser = styled.div`
//     display: flex;
//     width: 300px;
//     flex-direction: row;
//     .dashboard-user-role {
//         align-items: center;
//         font-weight: 400;
//         font-size: 25px;
//         line-height: 60px;
//         color: #CCCCCC;
//         margin-right: 30px;
//     }
// `;
