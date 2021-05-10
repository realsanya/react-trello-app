import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../axios/api-config';
import * as register from '../../redux/reducers/register';
import * as auth from '../../redux/reducers/auth';

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
        userData,
        setName,
        setSurname,
        setEmail,
        setDateOfBirth,
        setPassword,
        setConfirmPassword,
        setError,
        setSuccessMessage,
        setUserData,
    } = props;

    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        const _onInit = auth2 => {
          console.log('init OK', auth2)
        }
        const _onError = err => {
          console.log('error', err)
        }
        window.gapi.load('auth2', function() {
          window.gapi.auth2
            .init({ 
              client_id:
                process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
            .then(_onInit, _onError)
        })
    }, []);


    const signIn = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
          // метод возвращает объект пользователя
          // где есть все необходимые нам поля
          const profile = googleUser.getBasicProfile()
          console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
          console.log('Full Name: ' + profile.getName())
          console.log('Given Name: ' + profile.getGivenName())
          console.log('Family Name: ' + profile.getFamilyName())
          console.log('Image URL: ' + profile.getImageUrl())
          console.log('Email: ' + profile.getEmail())

          setEmailGoogle(profile.getEmail());
    
          // токен
          const id_token = googleUser.getAuthResponse().id_token;
          console.log('ID Token: ' + id_token)
          
          api()
            .post("/signIn/google", {
              name: profile.getGivenName(),
              surname: profile.getFamilyName(),
              email: profile.getEmail(),
            })
            .then((response) => {
              console.log(response.data);
              const { token, userData } = response.data;
              tokenService.setToken(token);
              setUserData(
                userData.id,
                userData.email,
                userData.name,
                userData.surname,
                userData.dateOfBirth,
                userData.role,
                // userData.state
              );
              setRedirect(true);
          });
        })
    };

    const signOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut().then(function() {
          console.log('User signed out.')
        })
    };

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

    return ( 
        <>
            {redirect ? (
                <Redirect to="/home" />
            ) : (
                <styled.Wrapper>
                    <styled.Header>
                        <h1>Регистрация</h1>
                        <Form
                            { ...props }
                            send={sendRegister}  />
                        <h2> 
                            Войти с помощью
                            <a onClick={signIn}>
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
      userData: state.auth.userData,
    //   profileId: state.auth.userData.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: bindActionCreators(auth.setUserData, dispatch),
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