import styled from 'styled-components';

export const PublishWrap = styled.div`
    background: white;
`;

export const  PublishContent = styled.div`
    margin-top: 45px;
    padding: 0 15px;
    .title {
        width: 100%;
        border: none;
        font-size: 24px;
        input {
            border: none
            border-bottom: 1px dashed #eee;
            padding: 10px 0;
        }
    }
    .content {
        width: 100%;
        height: calc(100vh - 100px);
        textarea {
            padding-top: 10px;
            border: none;
            width: 100%;
            height: 100%;
        }
    }
`;