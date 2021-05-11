import React, { useEffect, useState } from 'react';
import api from '../../../axios/api-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as task from '../../../redux/reducers/task';
import * as auth from '../../../redux/reducers/auth';

import * as styled from './styles';

const AttachmentView = (props) => {
    const {
        userId,
        task,
    } = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const [attachments, setAttachments] = useState(null);

    const getAttachments = () => {
        api()
            .get(("/attachments"),{
                params: {
                    taskId: task.id,
                }
            })
            .then((response) => {
                setAttachments(response.data.content);
            });
    }

    useEffect (() => {
        getAttachments();
    }, []);

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name,
            task.id,
        );
        api()
            .post(("/uploadfile"),{
                taskId: task.id,
                path: selectedFile.name,
                type: selectedFile.type,
            });
    };

    const fileData = () => {
        if (selectedFile) {
            return (
              <div>
                <h2>Детали файла:</h2>
                <p>Имя: {selectedFile.name}</p>
                <p>Тип: {selectedFile.type}</p>
                <p>
                  Последнее изменение:{" "}
                  {selectedFile.lastModifiedDate.toDateString()}
                </p>
              </div>
            );
          } else {
            return (
              <div>
                <br />
                    <h4>Выберите файл прежде чем нажать кнопку</h4>
              </div>
            );
          }
    };
  
    return (
        <styled.Wrapper>
            <styled.Header>
                <p>
                    Вложения к задаче
                </p>
            </styled.Header>
            <styled.Action>
                <input type="file" onChange={onFileChange} />
                <styled.Button onClick={onFileUpload}>
                    Загрузить
                </styled.Button>
            </styled.Action>
            <p>{fileData()}</p>
            {attachments && (
                <p>Всего вложений: {attachments.length}</p>
            )}
        </styled.Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (AttachmentView);