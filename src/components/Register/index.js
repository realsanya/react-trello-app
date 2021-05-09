import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../axios/api-config';
import * as register from '../../redux/reducers/register';

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
        setName,
        setSurname,
        setEmail,
        setDateOfBirth,
        setPassword,
        setConfirmPassword,
        setError,
        setSuccessMessage,
    } = props;

    const sendRegister = () => {
        api()
          .post("/signUp", {
            name,
            surname,
            email,
            dateOfBirth,
            password,
            confirmPassword,
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

    // const openGoogleOauth = () => {
    //     api()
    //         .post("/oauth2/authorization/google")
    //         .then((response) => {
    //             console.log(response);
    //             // if (response.data.isError) {
    //             //     setError(response.data.message, true);
    //             //   } else {
    //             //     setError(null, false);
    //             //     setSuccessMessage(response.data.message);
    //             //     setSuccessMessage(null);
    //     });
    // };
    

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
                            <a href="http://localhost:8080/oauth2/authorization/google" target="_blank">
                                <styled.Image src={googleIcon} />
                            </a>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(register.setEmail, dispatch),
        setPassword: bindActionCreators(register.setPassword, dispatch),
        setConfirmPassword: bindActionCreators(register.setConfirmPassword, dispatch),
        setName: bindActionCreators(register.setName, dispatch),
        setSurname: bindActionCreators(register.setSurname, dispatch),
        setDateOfBirth: bindActionCreators(register.setDateOfBirth, dispatch),
        setError: bindActionCreators(register.setError, dispatch),
        setSuccessMessage: bindActionCreators(register.setSuccessMessage, dispatch),
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);