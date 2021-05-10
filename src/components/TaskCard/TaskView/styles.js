import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-wrap: wrap;
    align-items: space-between;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 500px;
    width: 500px;
    background-color: #FFF;
    padding: 10px;
`;

export const Header = styled.div`
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

export const Description = styled.div`
    height: 200px;
    font-family: 'Rubik Light';
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;
    color: #000;
    margin-top: 25px;
`;

export const CheckList = styled.div`
    height: 170px;
    font-family: 'Rubik Light';
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;
    color: #000;
    margin-top: 10px;
`;

export const Action = styled.div`
    font-family: 'Rubik Light';
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #CCCCCC;
    cursor: pointer;
    :hover {
        text-decoration: underline;
        color: red;
    }
`;
