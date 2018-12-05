import styled from 'styled-components';
import login from '../../statics/loginBg.jpg';
export const LoginWraper = styled.div`
    background: url(${login});
    background-size: contain;
    width: 100vw;
    height: 100vh;
    background-color: white;
    background-repeat: no-repeat;
    form{
        margin-top: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        position: absolute;
        div.password, div.userName {
            margin-bottom: 20px;
        }
        label {
            width: 18%;
            display: inline-block;
        }
        input {
            border: none;
            border-bottom: 1px solid #eee;
        }
        button {
            line-height: 40px;
            background-image: linear-gradient(38deg,#f32121,#fd9839);
            border-radius: 40px;
            color: white;
            width: 90%;
            font-size: 20px;
            margin-top: 50px;
            border: none;
        }
    }
`;