import * as styled from './styles';
import avatar from './default.svg';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Column from '../Column';

import {
    TODO_STATUS,
    PAUSE_STATUS,
    ACTIVE_STATUS,
    STOP_STATUS,
} from '../../utils/constants';

const Dashboard = () => {
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
                    <Column type={STOP_STATUS} />
                </styled.Workspace>
            </styled.Container>
        </styled.Wrapper>
    );
}

export default Dashboard;