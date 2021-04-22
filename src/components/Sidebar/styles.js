import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    position: relative;
    float: left;
    display: flex;
    align-items: center;
    width: 130px;
    background-color: #2D73D2;
`;

export const Actions = styled.div`
    width: 100%;
    flex-direction: column;
    background-color: #2D73D2;
`;

export const Action = styled.div`
    width: 100%;
    height: 120px;
    background: url(${props => props.icon}) center no-repeat;
    z-index: 1;
    :hover {
        background-color: #1D5BAE;
    }
`;