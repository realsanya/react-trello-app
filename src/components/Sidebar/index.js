import { Link } from 'react-router-dom';
import * as styled from './styles';

import projectsIcon from './icons/projects.svg';
import dashboardIcon from './icons/dashboard.svg';
import supportIcon from './icons/support.svg';
import settingsIcon from './icons/settings.svg';


const Sidebar = () => {
    const currentPath = window.location.pathname;
    return (
            <styled.Wrapper>
                <styled.Actions>
                    <Link to="/home">
                        <styled.Action icon={projectsIcon} isActive={currentPath === "/home"}/>
                    </Link>
                    <Link to="/dashboard">
                        <styled.Action icon={dashboardIcon} isActive={currentPath === "/dashboard"}/>
                    </Link>
                    <Link to="/support">
                        <styled.Action icon={supportIcon} isActive={currentPath === "/support"}/>
                    </Link>
                    <Link to="/settings">
                        <styled.Action icon={settingsIcon} isActive={currentPath === "/settings"}/>
                    </Link>
                </styled.Actions>
            </styled.Wrapper>
    );
}

export default Sidebar;