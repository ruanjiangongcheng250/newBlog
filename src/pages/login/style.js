import styled from 'styled-components';
export const LoginWraper = styled.div`
    form{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        position: absolute;
        div.password, div.userName {
            margin-bottom: 10px;
        }
        label {
            width: 18%;
            display: inline-block;
        }
    }
`;