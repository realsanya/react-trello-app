import { Link } from 'react-router-dom';
import * as styled from './styles';


const Register = () => {
    return ( 
        <styled.Wrapper>
            <styled.Header>
                <h1>Регистрация</h1>
                <styled.Fields>
                    <styled.Input placeholder="Почта" />
                    <styled.Input placeholder="Пароль"/>
                </styled.Fields>
                <styled.Fields>
                    <styled.Input placeholder="Почта" />
                    <styled.Input placeholder="Пароль"/>
                </styled.Fields>
                <styled.Button>Зарегистрироваться</styled.Button>
            </styled.Header>
        </styled.Wrapper>
    );
}

export default Register;