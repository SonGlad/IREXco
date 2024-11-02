import { styled } from "styled-components";


export const ProjectStyled = styled.div`
    margin: 20px 0 40px 0;

    @media screen and (min-width: 768px){
        margin: 40px 0 40px 0;
    }

    .list{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        font-size: 16px;
        height: 459px;

        @media screen and (min-width: 768px){
            justify-content: space-between;
            height: auto;
        }
    }

    .item{
        width: 100%;
        @media screen and (min-width: 768px){
            width: 47%;
        }
    }

    .descr-cont{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 32px;
    }

    .item-svg{
        fill: ${p => p.theme.color.light_theme2};
    }
    

    .visible .item > .colored-area {
        border-radius: 20px;
        width: 100%;
        height: 5px;
        background-color: ${p => p.theme.color.black};
        animation: showBar 0.5s linear forwards;
    }

    .visible .item > .colored-area div{
        border-radius: 20px;
        position: relative;
        background-color: ${p => p.theme.color.main_color};
        height: 100%;
        opacity: 0;
        animation: showProgress 1s linear forwards;

        & p{
            opacity: 1;
        }

        & span{
            opacity: 1;
        }
    }

    @keyframes showBar {
        0%{
            width: 0%;
        }
        100%{
            width: 100%;
        }
    }

    @keyframes showProgress {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0;
            width: 0%;
        }
        100%{
            opacity: 1;
        }
    }


    .colored-area div span{
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(12px, -10px);
        border: 12px solid transparent;
        border-top-width: 10px;
        border-bottom-width: 0px;
        border-top-color: ${p => p.theme.color.black};
        opacity: 0;
    }

    .colored-area div p{
        position: absolute;
        display: block;
        text-align: center;
        width: 24px;
        top: 0;
        right: 0;
        transform: translate(12px, -28px);
        background-color: ${p => p.theme.color.black}; 
        opacity: 0;
    }
`