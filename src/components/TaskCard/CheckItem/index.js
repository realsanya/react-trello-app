import React from 'react';
import * as styled from './styles';

const CheckItem = (props) => {

    const {
        item
    } = props;

    const changeStatus = () => {
    };

    return (
        <styled.Wrapper onClick={changeStatus}>
            <input id="todo-0" type="checkbox" defaultChecked={item.status} />
            <p>{item.text}</p>
        </styled.Wrapper>
    );
}

export default CheckItem;