import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';
import avatar from './default.svg';

const Header = (props) => {
    const {
        title,
        text,
    } = props;

    return (
        <styled.Wrapper>
            <div className="project-name">
                {title}
            </div>
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
}

export default Header;