import { Link } from 'react-router-dom';
import * as styled from './styles';

import projectsIcon from './icons/projects.svg';
import dashboardIcon from './icons/dashboard.svg';
import chatIcon from './icons/chat.svg';
import settingIcon from './icons/setting.svg';


const Sidebar = (props) => {

    return (
            <styled.Wrapper>
                <styled.Actions>
                    <Link to="/signUp">
                        <styled.Action icon={projectsIcon} />
                    </Link>
                    <Link to="/dashboard">
                        <styled.Action icon={dashboardIcon} />
                    </Link>
                    <styled.Action icon={chatIcon} />
                    <styled.Action icon={settingIcon} />
                </styled.Actions>
            </styled.Wrapper>
    );
}

export default Sidebar;