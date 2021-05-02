import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 250px;
    height: 250px;
    background-color: #FFF;
    margin: 20px 10px;
    border-radius: 15px;
    padding: 20px;
`;

export const Header = styled.div`
    font-family: 'Rubik Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #000;
    border-bottom: 3px solid #E5E5E5;
`;

export const Description = styled.div`
    height: 120px;
    font-family: 'Rubik Light';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000;
    word-wrap: break-word;
    margin: 15px 0;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Actions = styled.div`
    border-top: 3px solid #E5E5E5;
`;

export const Action = styled.div`
    font-family: 'Rubik Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #CCCCCC;
    margin: 10px 0;
    
    :hover{ 
        cursor: pointer;
        text-decoration: underline;
    }
`;
