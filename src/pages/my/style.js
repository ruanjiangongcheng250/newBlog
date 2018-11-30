import styled from 'styled-components';
import { arrowRight } from '../../statics/common';
export const HomeWraper  = styled.div`
    padding: 20px;
`;

export const AvatorContent = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 80px;
        height: 80px;
        border-radius: 80px;
        margin-right: 20px;
    }
    .nameAndDesc {
        .name {
            font-size: 24px;
            color: #333;
            line-height: 30px;
        }
        .desc {
            font-size: 12px;
            line-height: 16px;
            color: #999;
        }
    }
`;

export const DataBord = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-top: 20px;
    div {
        display: flex;
        flex-direction: column;
        p {
            margin-bottom: 5px;
        }
    }
`;

export const List = styled.div`
    margin-top: 30px;
    font-size: 18px;
    color: #333;
`;

export const ListItem = styled.div`
    line-height: 50px;
    border-bottom: 1px solid #999;
    background: url(${arrowRight});
    background-repeat: no-repeat;
    background-size: 24px 20px;
    background-position: right;
    color: #333;
`;