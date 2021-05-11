import React, { useEffect, useState } from 'react';
import api from '../../../axios/api-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as task from '../../../redux/reducers/task';
import * as auth from '../../../redux/reducers/auth';

import * as styled from './styles';

const CommentView = (props) => {
    const {
        task,
        userId,
    } = props;

    const [comments, setComments] = useState(null);
    const [comment, setComment] = useState("");

    const getComments = () => {
        api()
            .get(("/comments"), {
                params: {
                    taskId: task.id,
                }
            })
            .then((response) => {
                setComments(response.data.content);
            });
    }

    useEffect (() => {
        getComments();
    }, []);

    const onCommentChange = (ev) => {
        setComment(ev.target.value);
    };

    const sendComment = () => {
        api()
        .post(("/comment/add"), {
            params: {
                taskId: task.id,
                userId,
                comment,
            }
        })
    };

    return (
        <styled.Wrapper>
            <styled.Header>
                Комментарии к задаче
            </styled.Header>
            {comments && (
                <styled.List>
                    {comments.map((comment) => {
                        console.log(comment);
                        return(
                            <div key={comment.id}>
                                <p>{comment.text}</p>
                            </div>
                        )
                    })}
                </styled.List>
            )}
            <styled.Action>
                <styled.Input 
                    value={comment}
                    type="email"
                    placeholder="Введите комментарий" 
                    onChange={onCommentChange} 
                />
                <styled.Button onClick={sendComment}>
                    Отправить
                </styled.Button>
            </styled.Action>
            {comments && (
                <p> Всего комментариев: {comments.length}</p>
            )}
        </styled.Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        checkItems: state.task.checkItems,
        userId: state.auth.userId,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCheckItems: bindActionCreators(task.setCheckItems, dispatch),
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (CommentView);