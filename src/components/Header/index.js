import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';
import avatar from './default.svg';

const Header = (props) => {
    const {
        title,
        text,
        icon,
    } = props;

    const addProject = () => {
        console.log('add');
    }

    return (
        <styled.Wrapper>
            <styled.DashboardTitle>
                <div className="project-name">
                    {title}
                </div>
                <img src={icon} onClick={addProject} />
            </styled.DashboardTitle>
            <styled.DashboardUser>
                <div className="dashboard-user-role">
                    {text}
                </div>
                <img src={avatar}/>
            </styled.DashboardUser>
        </styled.Wrapper>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Header.defaultProps = {
    icon: '',
}


export default Header;