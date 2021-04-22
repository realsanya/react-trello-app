import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    setLoginEmail,
    setLoginPassword,
    setLoginError,
    setUserData,
} from '../../redux/reducers/auth';

import api from '../../axios/api-config';
import * as tokenService from "../../services/TokenService";
import * as styled from './styles';
import Form from './Form';


const Login = (props) => {

    const {
      email,
      password,
      // role,
    } = props;

    const sendLogin = () => {
        api()
          .post("/signIn", {
            email,
            password,
            // role,
          })
          .then((response) => {
            const { token, isError, message, userData } = response.data;
            if (isError) {
              setLoginError(message, true);
            } else {
              tokenService.setToken(token);
              

              // setUserData(
              //   // userData.id,
              //   userData.loginEmail,
              //   // userData.role,
              //   // userData.state
              // );
              setLoginError(null, false);
            }
          });
      };


    return ( 
        <styled.Wrapper>
            <styled.Header>
                <h1>Авторизация</h1>
                    <Form 
                        { ...props }
                        send={sendLogin} />
                <h2> 
                    Нет аккаунта? 
                    <Link to="/signUp">Регистрация</Link>
                </h2>
            </styled.Header>
        </styled.Wrapper>
    );
}


const mapStateToProps = (state) => {
    return {
      email: state.auth.email,
      loginPassword: state.auth.loginPassword,
      // role: state.auth.role,
      isError: state.auth.isError,
      error: state.auth.error,
      // id: state.auth.userData.id,
    };
};

const mapDispatchToProps = {
    setLoginEmail,
    setLoginPassword,
    setLoginError,
    setUserData,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
