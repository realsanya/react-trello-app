import * as styled from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Column from '../Column';
import { connect } from 'react-redux';

import {
    TODO_STATUS,
    PAUSE_STATUS,
    ACTIVE_STATUS,
    COMPLETED_STATUS,
} from '../../utils/constants';
import React from 'react';

class Dashboard extends React.Component {

    render() {
        console.log(this.props.userInfo);
        return(
            <styled.Wrapper>
                <Sidebar />
                <styled.Container>
                    <Header 
                        title="Новый проект"
                        text="Разработчик" />
                    <styled.Workspace>
                        <Column type={TODO_STATUS} />
                        <Column type={PAUSE_STATUS} />
                        <Column type={ACTIVE_STATUS} />
                        <Column type={COMPLETED_STATUS} />
                    </styled.Workspace>
                </styled.Container>
            </styled.Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      userInfo: state.auth.userData,
    };
  };
  
const mapDispatchToProps = {

};
  

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);