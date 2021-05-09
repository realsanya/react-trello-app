import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';
import Label from './Label';
import DragAndDrop from '../../DragAndDrop';
import TaskCard from '../TaskCard';

const Column = (props) => {

    const {
        type
    } = props;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_DROP_DEPTH':
                return { ...state, dropDepth: action.dropDepth };
            case 'SET_IN_DROP_ZONE':
                return { ...state, inDropZone: action.inDropZone };
            case 'ADD_FILE_TO_LIST':
                return { ...state, fileList: state.fileList.concat(action.files) };
            default:
                return state;
        }
    };

    const [data, dispatch] = useReducer (
        reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
    );

    return (
        <styled.Wrapper>
            <Label type={type} /> 
            <DragAndDrop data={data} dispatch={dispatch} />
            <TaskCard />
            <TaskCard />
        </styled.Wrapper>
    );
}

export default Column;