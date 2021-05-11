import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    background-color: ${({ color }) => color !== '' ? color : 'black'};
    border-radius: 15px;
    margin: 0;
`;


export const Title = styled.div`
    width: 80%;
    height: 60px;
    background-color: ${({ titleColor }) => titleColor !== '' ? titleColor : 'black'};
    border-radius: 15px;
    margin: 0;

    p {
        font-family: 'Rubik Medium';
        font-weight: 400;
        color: #FFF;
        text-align: center;
        align-items: center;
        font-size: 20px;
        line-height: 60px;
        margin: 0;
    }
`;

export const Counter = styled.div`
    display: flex;
    width: 20%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin: 0;

    p {
        width: 20px;
        height: 20px;
        background-color: #FFFDFA;
        border-radius: 3px;
        font-family: 'Rubik Medium';
        font-weight: 400;
        color: #9CA6E6;
        text-align: center;
        align-items: center;
        font-size: 16px;
        margin: 0;
    }
`;