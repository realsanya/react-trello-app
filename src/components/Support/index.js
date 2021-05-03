import React, { useEffect } from 'react';
import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import notFoundIcon from './notFound.svg';

const Support =  () => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.Container>
                <Header 
                    title="Поддержка" 
                    text="Александра"/>
                <styled.Workspace>
                    <img src={notFoundIcon}/>
                    <p>Данная страница находится на стадии разработки. 
                        Вы можете воспользоваться онлайн-консультантом в правом нижнем углу или написать разработчику :)</p>
                    <a href="mailto:sashamorozova01@mail.ru"> Написать разработчику </a>
                </styled.Workspace>
            </styled.Container>
        </ styled.Wrapper>
    );
}

export default Support;