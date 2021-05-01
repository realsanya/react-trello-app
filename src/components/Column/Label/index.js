import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';

const Label = (props) => {
    const {
        type
    } = props;

    return (
        <styled.Wrapper color={type.color}>
            <styled.Title titleColor={type.titleColor}>
                <p>{type.title}</p>
            </styled.Title>
            <styled.Counter>
                <p>4</p>
            </styled.Counter>
        </styled.Wrapper>
    );
}
    
Label.propsType = {
    type: PropTypes.shape().isRequired,
}

export default Label;