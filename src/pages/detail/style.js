import styled from 'styled-components';

export const DetailWraper = styled.div`
    padding: 10px;
    margin-top: 50px;
    img {
        max-width: 100%;
    }
`;

export const Content = styled.div`
    p {
        line-height: 20px;
        word-break: break-word;
    }
`;

export const Title = styled.div`
    font-size: 30px;
    padding-bottom: 10px;
`;

export const Author = styled.div`
    font-size: 16px;
    margin: 10px 0;
`;

export const Comment = styled.div`
    p.title {
        font-size: 20px;
        font-weight: 800;
        margin: 15px 0
    }
    padding: 0 15px;
    margin-bottom: 30px;
`;

export const CommentList = styled.div`

`;

export const CommentItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    img {
        margin-right: 10px;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .rightContent{
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
        display: flex;
        .nameAndTime {
            display: flex;
            justify-content: space-between;
        }
    }

`;