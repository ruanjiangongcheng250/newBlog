import styled from 'styled-components';

export const BackToTopWraper = styled.div`
    position: fixed;
    bottom: ${props=>props.bottom + 'px'};
    right: 10px;
    width: 50px;
    height: 50px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    border-radius: 50px;
    img {
        width: 50px;
        height: 40px;
        margin-top: 5px;
        background-repeat: no-repeat;
    }
`;