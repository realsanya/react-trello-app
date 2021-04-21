import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
`;

export const Header = styled.div`
    background-color: #2D73D2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #FFF;
    margin: 0;

    h2 {
        display: flex;
        flex-direction: row;
        font-family: 'Rubik Light';
        font-weight: 300;
        font-size: 30px;
        letter-spacing: 0.05em;
        color: #FFF;
        margin-top: 40px;
    }
`;



export const Image = styled.img`
    display: flex;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    align-items: center;
`;


