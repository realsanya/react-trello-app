import React, { useState } from 'react';
import * as styled from './styles';

const AddMemberForm = (props) => {

    const {
        memberEmail,
        setMemberEmail,
        addMember,
    } = props;

    const [email, setEmail] = useState(memberEmail);

    const onEmailChane = (ev) => {
        setEmail(ev.target.value);
    };

    const onEmailBlur = () => {
        setMemberEmail(email);
    }

    return (
        <styled.Wrapper>
            <styled.Header>
                Добавить участника
            </styled.Header>
            <styled.Input 
                value={email}
                type="text"
                placeholder="Email" 
                onChange={onEmailChane}
                onBlur={onEmailBlur} 
            />
            <styled.Button onClick={addMember} >Добавить</styled.Button>
        </styled.Wrapper>
    );
}

export default AddMemberForm;