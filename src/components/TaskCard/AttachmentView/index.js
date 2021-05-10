import React, { useEffect } from 'react';
import api from '../../../axios/api-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as task from '../../../redux/reducers/task';

import * as styled from './styles';

const AttachmentView = (props) => {
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
                Вложения к задаче
            </styled.Header>
            <styled.List>
                listlist
            </styled.List>
            <styled.Action>
                <styled.Input />
                <styled.Button>
                    Отправить
                </styled.Button>
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

export default connect (mapStateToProps, mapDispatchToProps) (AttachmentView);