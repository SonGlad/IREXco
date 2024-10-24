import { styled } from "styled-components";


export const IconsStyledList = styled.div`
    
    .button-block{
        margin-bottom: 20px;
        width: 100%;
    }

    .filter-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }

    .filter-button{
        font-size: 14px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 15px;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.black};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 768px){
            font-weight: 700;
            font-size: 16px;
            padding: 14px 28px;
        }
    }

    .icon-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .icons-item{
        border-radius: 15px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        box-shadow: 0px 0px 10px 10px rgba(0,0,2,0.5);
        position: relative;
        overflow: hidden;
        background-color: ${p => p.theme.color.bg_color};


        @media screen and (min-width: 768px){
            width: 150px;
            height: 150px;
            opacity: 0;
            scale: 0.3;
            transition: opacity .5s ease, scale .5s ease;
            transition-delay: calc(0.1s * var(--i));
        }

        @media screen and (min-width: 1440px){
            width: 200px;
            height: 150px;
        }
    }

    @media screen  and (min-width: 768px){   
        .active .icons-item{
            scale: 1;
            opacity: 1;
        }
    
        .animate .icons-item{
            scale: 0.3;
            opacity: 0;
            animation: zoomIn .5s ease forwards;
            animation-delay: calc(0.1s * var(--i));
        }
    }


    @keyframes zoomIn {
        0%{
            scale: 0.3;
            opacity: 0;
        }
        100%{
            scale: 1;
            opacity: 1;
        }
    }

    .icons{
        fill: ${p => p.theme.color.text_color};
        width: 50px;
        height: 50px;
        transform: scale(1);
        transition: transform ${p => p.theme.transition.main_transition};
    }

    .icons-item:hover .icons{
        transform: scale(1.3);
    }

    .value-cont{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.4), ${p => p.theme.color.main_color});
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 15px;
        transform: translateY(150px);
        visibility: hidden;
        opacity: 0;
        transition: transform ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px) {
            padding: 25px 0px 15px 0px;
        }

        @media screen and (min-width: 1440px) {
            padding: 20px 0px 15px 0px;
        }
    }

    .icons-item:hover .value-cont{
        transform: translateY(0px);
        opacity: 1;
        visibility: visible;
    }
    
    .value-text{
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        transform: translateY(8px);

        @media screen and (min-width: 768px) {
            font-size: 20px;
            transform: translateY(0px);
        }

        @media screen and (min-width: 1440px) {
            font-size: 24px;
        }
    }

    .redirect-link{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px) {
            width: 40px;
            height: 40px;
        }

        @media screen and (min-width: 1440px) {
            width: 50px;
        }
    }

    .redirect-icon{
        fill: ${p => p.theme.color.text_color};
        transition: fill ${p => p.theme.transition.main_transition};
    }

    .redirect-link:hover .redirect-icon{
        fill: ${p => p.theme.color.second_bg_color};
    }



    .tool-tip{
        color: ${p => p.theme.color.main_color};
        background-color: ${p => p.theme.color.text_color};
        width: 120px;


        @media screen and (min-width: 768px){
            width: 150px;
        }

        @media screen and (min-width: 1440px){
            width: 220px;
        }
    }

    .tooltip-title{
        font-weight: 800;
        font-size: 11px;
        margin-bottom: 6px;
    }

    .tooltip-text{
        font-size: 11px;
        color: ${p => p.theme.color.black};
    }

`