import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';
import Label from './Label';

const Column = (props) => {

    const {
        type
    } = props;

    return (
        <styled.Wrapper>
            <Label type={type} /> 
        </styled.Wrapper>
    );
}

export default Column;