import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import notFoundIcon from './notFound.svg';

const Default =  (props) => {

    const {
        userData
    } = props;
    
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.Container>
                <Header 
                    title="Рабочая область" 
                    text={userData.name} />
                <styled.Workspace>
                    <img src={notFoundIcon}/>
                    <p> Чтобы воспользоваться областью необходимо выбрать проект. </p>
                        <Link to={"/home"}> Выбрать проект </Link> 
                        <br/>
                        <Link to={"/main"}> Создать новый проект</Link>
                </styled.Workspace>
            </styled.Container>
        </ styled.Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
    };
};


export default connect(mapStateToProps, {}) (Default);