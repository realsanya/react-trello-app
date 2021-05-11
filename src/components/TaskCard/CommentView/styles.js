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
    p {
        font-family: 'Rubik Medium';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: #706767;
        margin-left: 5px;
    }
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

export const List = styled.div`
    height: 340px;
    font-family: 'Rubik Light';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    margin-top: 15px;
`;

export const Action = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;

export const Input = styled.input`
    width: 290px;
    height: 40px;
    background-color: #D3D3D3;
    outline: none;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    font-weight: 300;
    color: #706767;
    padding:  5px 20px;

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: left;
        align-items: center;
        color: ${(props) => (props.error ? '#E8435A' : '#706767')};
        font-weight: ${(props) => (props.error ? '500' : '300')};
        font-size: ${(props) => (props.error ? '16px' : '30px')};
    }
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
