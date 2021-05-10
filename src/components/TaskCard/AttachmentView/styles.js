import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-wrap: wrap;
    align-items: space-between;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 250px;
    width: 500px;
    background-color: #FFF;
    padding: 10px;

    p {
        font-family: 'Rubik Medium';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: #706767;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    font-family: 'Rubik Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #000;
    cursor: pointer;
`;

export const Action = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-top: 10px;
`;


export const Button = styled.div`
    display: flex;
    width: 150px;
    height: 50px;
    background-color: #96F7B8;
    font-family: 'Rubik Medium';
    font-weight: 400;
    font-size: 20px;
    color: #FFF;
    border-radius: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
