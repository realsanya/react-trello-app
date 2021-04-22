import * as styled from './styles';
import avatar from './default.svg';
import Sidebar from '../Sidebar';

const Dashboard = () => {
    return(
        <styled.Wrapper>
            <Sidebar />
            <styled.DashboardWrapper>
                <styled.Header>
                    <div className="project-name">
                        Новый проект 
                    </div>
                    <styled.DashboardUser>
                        <div className="dashboard-user-role">
                            Разработчик
                        </div>
                        <img src={avatar}/>
                    </styled.DashboardUser>
                </styled.Header>
            </styled.DashboardWrapper>
        </styled.Wrapper>
    );
}

export default Dashboard;