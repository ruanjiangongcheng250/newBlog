import styled from "styled-components";

export const SettingWrap  = styled.div`
    background: white;
    height: 100%;
`;

export const SettingContent = styled.div`
    padding: 0 15px
    .title {
        font-size: 14px;
        color: #999;
        padding: 20px 0;
    }
    .setting-item {
        border-bottom: 1px solid #eee;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item-key {
            font-size: 18px;
            color: #333;
        }
        .item-value {
            font-size: 16px;
            color: #666;
        }
        img {
            width: 44px;
            height: 44px;
            border-radius: 44px;
        }
        input[type=file] {
            width: 50px;
            position: absolute;
            right: 15px;
            opacity: 0;
        }
    }
`;

export const LoginOut = styled.div`
    text-align: center;
    line-height: 44px;
    margin: 30px 0;
    span {
        padding: 10px 20px;
        border: 1px solid red;
        border-radius: 3px;
    }
`;

export const BasicSetting = styled.div`
    margin-top: 50px;
`;

export const MyProfile = styled.div`

`;

export const ModifySettingMask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    .modifyContnet {
        width: 80vw;
        height: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 10px;
        padding: 15px 20px;
        box-sizing: border-box;
        .modifyType {
            font-size: 20px;
            font-weight: 600;
        }
        input {
            border: none;
            norder-bottom: 1px solid red;
            border-bottom: 2px solid red;
            width: 100%;
            padding-top: 20px;
            font-size: 18px;
        }
        .btns {
            text-align: right;
            margin-top: 25px;
            span {
                padding-left: 15px;
            }
        }
    }
`;