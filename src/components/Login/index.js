import { Link } from 'react-router-dom';
import Register from '../Register';
import * as styled from './styles';


const Login = () => {
    return ( 
        <styled.Wrapper>
            <styled.Header>
                <h1>Авторизация</h1>
                <styled.Input placeholder="Почта" />
                <styled.Input placeholder="Пароль"/>
                <styled.Button>Войти</styled.Button>
                <h2> 
                    Нет аккаунта? 
                    <Link to="/signUp">Регистрация</Link>
                </h2>
            </styled.Header>
        </styled.Wrapper>
    );
}

export default Login;