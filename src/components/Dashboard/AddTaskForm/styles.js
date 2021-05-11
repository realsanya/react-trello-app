import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    font-family: 'Rubik Medium';
    font-weight: 400;
    font-size: 36px;
    color: #000;
    margin: 10px 0;
`;

export const Input = styled.input`
    width: 400px;
    height: 60px;
    background-color: #D3D3D3;
    outline: none;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    font-weight: 300;
    color: #706767;
    padding:  5px 20px;
    margin: 20px;

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: left;
        align-items: center;
        color: ${(props) => (props.error ? '#E8435A' : '#706767')};
        font-weight: ${(props) => (props.error ? '500' : '300')};
        font-size: ${(props) => (props.error ? '14px' : '30px')};
    }
`;

export const Button = styled.div`
    display: flex;
    width: 350px;
    height: 80px;
    background-color: #96F7B8;
    font-family: 'Rubik Medium';
    font-weight: 400;
    font-size: 35px;
    color: #FFF;
    border-radius: 25px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
`;