import styled from 'styled-components';

export const HomeWraper = styled.div`
    .am-tabs-tab-bar-wrap {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        width: 100%;
    }

    .am-tabs-content-wrap {
        margin-top: 44px;
        margin-bottom: 50px; 
    }
`;

export const ListWraper = styled.div`
    background-color: white;
    margin-top: 5px;
    .noDataTip {
        text-align:center;
        margin-top: 50px;
        background: #f5f5f9;
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

export const ImageWraper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 170px;
`;

export const LeftImage = styled.div`
    width: 50%;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const RightImages = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    img {
        height: 50%;
    }
`;






