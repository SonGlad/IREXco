import { styled } from "styled-components";


export const RingLoaderStyled = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vw * 0.5);
    max-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

`

export const FormStyled = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
`