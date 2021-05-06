import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as auth from '../../redux/reducers/auth';


import api from '../../axios/api-config';
import * as tokenService from "../../services/TokenService";
import * as styled from './styles';
import Form from './Form';


const Login = (props) => {

  const {
    loginEmail,
    loginPassword,
    setLoginError,
    setUserData,
  } = props;
     
  const sendLogin = () => {
        api()
          .post("/signIn", {
            email: loginEmail,
            password: loginPassword,
            role: "ADMIN",
          })
          .then((response) => {
            const { token, isError, message, userData } = response.data;
            console.log(userData);
            if (isError) {
              setLoginError(message, true);
            } else {
              tokenService.setToken(token);
              setUserData(
                userData.id,
                userData.email,
                userData.name,
                userData.surname,
                userData.dateOfBirth,
                // userData.role,
                // userData.state
              );
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
      loginEmail: state.auth.loginEmail,
      loginPassword: state.auth.loginPassword,
      // role: state.auth.role,
      isError: state.auth.isError,
      error: state.auth.error,
      id: state.auth.userData.id,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginEmail: bindActionCreators(auth.setLoginEmail, dispatch),
    setLoginPassword: bindActionCreators(auth.setLoginPassword, dispatch),
    setLoginError: bindActionCreators(auth.setLoginError, dispatch),
    setUserData: bindActionCreators(auth.setUserData, dispatch),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
