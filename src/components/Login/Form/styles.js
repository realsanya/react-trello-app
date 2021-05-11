import styled from 'styled-components';

export const Input = styled.input`
    width: 500px;
    height: 60px;
    background-color: #D3D3D3;
    outline: none;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    font-weight: 300;
    color: #706767;
    padding:  5px 20px;
    margin-top: 30px;

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
    width: 400px;
    height: 80px;
    background-color: #96F7B8;
    font-family: 'Rubik Medium';
    font-weight: 400;
    color: #FFF;
    border-radius: 25px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    cursor: pointer;
`;
