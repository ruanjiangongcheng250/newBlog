import styled from 'styled-components';
export const ToolBarWraper = styled.div`
    height: 50px;
    border-top: 1px solid #f0f0f0;
    right: 0;
    position: fixed;
    bottom: 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    width: 100%;
    z-index: 1;
    a{
        text-decoration: none;
        color: rgb(136, 136, 136);
    }
`;

export const ToolBarItem = styled.div`
    &.active {
        color: #ef524d;
    }
    img {
        width: 24px;
        height: 24px;
        background-size: container;    
        margin: 5px 0;
    }
    display: block;
    height: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
`;
