import styled from 'styled-components';

export const ListWraper = styled.div`
    background-color: white;
    margin-top: 5px;
    padding: 0 10px;
    width: 100%;
    margin-top: 50px;
    box-sizing: border-box;
    overflow-x: hidden;
    height: calc(100vh - 50px);
    .noDataTip {
        text-align:center;
        margin-top: 50px;
        height: calc(100vh - 50px);
    }
`;


export const ListItem = styled.div`
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    width: 100%;
    padding: 10px 10px;
`;

export const ListInfo = styled.div`
    .title {
        line-height: 22px;
        color: #333333;
        font-size: 16px;
        margin-bottom: 4px;
    }
    .desc {
        color: #666666;
        font-size: 12px;
        line-height: 17px;
        margin-bottom: 8px;
        height: 34px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    }
    .info {
        display: flex;
        align-items: center;
        span {
            display: flex;
            align-items: center;
            margin-right: 20px;
            img{ 
                margin-right: 5px;
                width: 16px;
                height: 16px;
            }
        }
    }
`;

export const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`;

export const Operate = styled.div`
    background: white;
    text-align: center;
    position: absolute;
    padding: 10px;
    border-radius: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
