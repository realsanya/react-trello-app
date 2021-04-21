import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  setEmail,
  setPassword,
  setConfirmPassword,
  setName,
  setSurname,
  setDateOfBirth,
  setError,
  setSuccessMessage,
} from '../../redux/reducers/register';
import api from '../../axios/api-config';

import * as tokenService from "../../services/TokenService";
import * as styled from './styles';
import googleIcon from './google.svg';
import Form from './Form';

const Register = (props) => {

    const {
        name,
        surname,
        email,
        dateOfBirth,
        password,
        confirmPassword,
    } = props;
    const sendRegister = () => {
        api()
          .post("/signUp", {
            name: name,
            surname: surname,
            email: email,
            dateOfBirth: dateOfBirth,
            password: password,
            confirmPassword: confirmPassword,
          })
          .then((response) => {
            if (response.data.isError) {
              setError(response.data.message, true);
            } else {
              setError(null, false);
              setSuccessMessage(response.data.message);
              setSuccessMessage(null);
            }
        });
    };
    

    return ( 
        <>
            {tokenService.isTokenPresent() ? (
                <Redirect to="/main/" />
            ) : (
                <styled.Wrapper>
                    <styled.Header>
                        <h1>Регистрация</h1>
                        <Form
                            { ...props }
                            send={sendRegister}  />
                        <h2> 
                            Войти с помощью
                        <styled.Image src={googleIcon} />
                        </h2>
                    </styled.Header>
                </styled.Wrapper>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      email: state.register.email,
      password: state.register.password,
      confirmPassword: state.register.confirmPassword,
      name: state.register.name,
      surname: state.register.surname,
      dateOfBirth: state.register.dateOfBirth,
      isError: state.register.isError,
      error: state.register.error,
      successMessage: state.register.successMessage,
    //   profileId: state.auth.userData.id,
    };
};

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setConfirmPassword,
    setName,
    setSurname,
    setDateOfBirth,
    setError,
    setSuccessMessage,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);