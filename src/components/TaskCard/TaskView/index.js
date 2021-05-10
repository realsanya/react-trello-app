import React, { useEffect } from 'react';
import api from '../../../axios/api-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as task from '../../../redux/reducers/task';

import * as styled from './styles';
import CheckItem from '../CheckItem';

const TaskView = (props) => {
    const {
        task,
        setCheckItems,
        checkItems,
    } = props;

    const getCheckItems = () => {
        api()
            .get(("/check/all"),{
                params: {
                    taskId: task.id,
                }
            })
            .then((response) => {
                // console.log(response.data.content);
                setCheckItems(response.data.content);
            });
    }

    useEffect (() => {
        getCheckItems();
    }, []);

    console.log(checkItems);
    return (
        <styled.Wrapper>
            <styled.Header>
                {task.name}
            </styled.Header>
            <styled.Description>
                {task.description}
            </styled.Description>
            <styled.CheckList>
                {checkItems.map((item) => {
                    return (
                        <CheckItem item={item} />
                    );
                })}
            </styled.CheckList>
            <styled.Action>
                Архивировать
            </styled.Action>
        </styled.Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        checkItems: state.task.checkItems,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCheckItems: bindActionCreators(task.setCheckItems, dispatch),
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (TaskView);