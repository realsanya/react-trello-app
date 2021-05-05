import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';
import avatar from './icons/default.svg';
import addIcon from './icons/add.svg';

const Header = (props) => {
    const {
        title,
        text,
        isHome,
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
    text: PropTypes.string,
    isHome: PropTypes.bool,
    setModalActive: PropTypes.func,
}

Header.defaultProps = {
    text: '',
    isHome: false,
    setModalActive: () => {},
}


export default Header;