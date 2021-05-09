import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../axios/api-config';
import * as tokenService from "../../services/TokenService";
import * as auth from '../../redux/reducers/auth';
import * as data from '../../redux/reducers/data';


import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Form from './Form';

//TODO переделать
const Settings = (props) => {

    const {
      userData,
      setLoginError,
      setUserData,
      setProjects,
      setName,
      setSurname,
      setDateOfBirth,
      setEmail,
    } = props;
    
    const update = () => {
        api()
          .post("/update", {
            email: props.loginEmail,
            password: props.loginPassword,
            // role,
          })
          .then((response) => {
            const { token, isError, message, userData } = response.data;
            if (isError) {
              setLoginError(message, true);
            } else {
              tokenService.setToken(token);
              setUserData(
                // userData.id,
                userData.email,
                // userData.role,
                // userData.state
              );
              setLoginError(null, false);
            }
        });
    };

    const logout = () => {
        api()
        .get("/logout")
        .then((response) => {
          setProjects(response.data.content);
      });
    };

    return (
      <>
        {tokenService.isTokenPresent() ? (
            <styled.Wrapper>
                <Sidebar />
                <styled.Container>
                    <Header 
                        title="Настройки"
                        text={userData.name}/>
                    <styled.Workspace>
                      <Form 
                        { ...props }
                        update={update}
                        logout={logout}/>
                    </styled.Workspace>
                </styled.Container>
          </styled.Wrapper>
        ) : (
          <Redirect to={"/signIn" } />
        )}
       </>
    );
}

const mapStateToProps = (state) => {
    return {
      userData: state.auth.userData,
      loginEmail: state.auth.loginEmail,
      loginPassword: state.auth.loginPassword,
      // role: state.auth.role,
      isError: state.auth.isError,
      error: state.auth.error,
      // id: state.auth.userData.id,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setrName: bindActionCreators(auth.setUserName, dispatch),
    setSurname: bindActionCreators(auth.setUserSurname, dispatch),
    setDateOfBirth: bindActionCreators(auth.setUserDateOfBirth, dispatch),
    setEmail: bindActionCreators(auth.setLoginEmail, dispatch),
    setLoginError: bindActionCreators(auth.setLoginError, dispatch),
    setUserData: bindActionCreators(auth.setUserData, dispatch),
    setProjects: bindActionCreators(data.setProjects, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);