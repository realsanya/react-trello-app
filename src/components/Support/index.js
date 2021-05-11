import React from 'react';
import { connect } from 'react-redux';

import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import notFoundIcon from './notFound.svg';

const Support =  (props) => {

    const {
        userData
    } = props;
    
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.Container>
                <Header 
                    title="Поддержка" 
                    text={userData.name} />
                <styled.Workspace>
                    <img src={notFoundIcon}/>
                    <p>Данная страница находится на стадии разработки. 
                        Вы можете воспользоваться онлайн-консультантом в правом нижнем углу или написать разработчику :)</p>
                    <a href="mailto:sashamorozova01@mail.ru"> Написать разработчику </a>
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


export default connect(mapStateToProps, {}) (Support);