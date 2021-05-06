import React from 'react';
import PropTypes from 'prop-types';
import * as tokenService from "../../services/TokenService";

import * as styled from './styles';
import avatar from './icons/default.svg';
import addIcon from './icons/add.svg';

const Header = (props) => {
    const {
        title,
        text,
        isHome,
        isDashboard,
        setModalActive,
    } = props;

    return (
        <styled.Wrapper>
            <styled.DashboardTitle>
                <div className="project-name">
                    {title}
                </div>
                {isHome && 
                    <img src={addIcon} onClick={() => setModalActive(true)}/>
                }  
                {isDashboard && 
                    <img src={addIcon} onClick={() => setModalActive(true)}/>
                }  
            </styled.DashboardTitle>
            {tokenService.isTokenPresent() && (
                <styled.DashboardUser>
                    <div className="dashboard-user-role">
                        {text}
                    </div>
                    <img src={avatar}/>
                </styled.DashboardUser>
            )}
        </styled.Wrapper>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    isHome: PropTypes.bool,
    isDashboard: PropTypes.bool,
    setModalActive: PropTypes.func,
}

Header.defaultProps = {
    text: '',
    isHome: false,
    isDashboard: false,
    setModalActive: () => {},
}


export default Header;