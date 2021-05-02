import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-wrap: wrap;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 250px;
    background-color: #FFF;
    border-radius: 15px;
    margin-top: 10px;
    padding: 20px;
`;

export const Header = styled.div`
    width: 90%;
    font-family: 'Rubik Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #000;
`;

export const Description = styled.div`
    height: 130px;
    font-family: 'Rubik Light';
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #000;
    margin-top: 15px;
    border-bottom: 3px solid #E5E5E5;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    
    .deadline {
        display: flex;
        flex-direction: row;
        p {
            font-family: 'Rubik Light';
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.02em;
            color: #CCCCCC;
            margin-left: 5px;
        }
    }

    .attachments {
        display: flex;
        flex-direction: row;
        p {
            font-family: 'Rubik Light';
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.02em;
            color: #CCCCCC;
            margin-left: 5px;
        }
    }

    .comments {
        display: flex;
        flex-direction: row;
        p {
            font-family: 'Rubik Light';
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.02em;
            color: #CCCCCC;
            margin-left: 5px;
        }
    }

`;