import styled from "styled-components";


export const PortfolioStyled = styled.div`
    padding: 20px 10px 10px 10px;

    @media screen and (min-width: 768px){
        padding: 60px 0 60px 0;
    }
    
    .content-div{
    }

    .potfolio-title{
        font-size: 46px;
        line-height: 120%;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 56px;
            font-weight: 700;
        }
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


    .cols {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        padding: 20px 0;

        @media screen and (min-width: 768px){
            gap: 17px;
        }
        @media screen and (min-width: 900px){
            gap: 29px;
        }
        @media screen and (min-width: 1440px){
            gap: 36px;
        }
    }

    .col {
        width: 100%;
        @media screen and (min-width: 768px){
            max-width: 48%;
            opacity: 0;
            visibility: hidden;
        }
        @media screen and (min-width: 900px){
            max-width: 31%;
        }
        @media screen and (min-width: 1440px){
            max-width: 25%;
            max-height: 280px;
        }
    }

    .active .col{
        @media screen and (min-width: 768px){
            opacity: 01;
            visibility: hidden;
            animation: slideColTop 1s ease forwards;
            animation-delay: calc((0.2s * var(--i) + 0.2s));
        }
    }

    .animate .col{
        @media screen and (min-width: 768px){
            visibility: hidden;
            opacity: 0;
            animation: slideColTop 1s ease forwards;
            animation-delay: calc((0.2s * var(--i) + 0.2s));
        }
    }


    @keyframes slideColTop {
        0%{
            visibility: hidden;
            opacity: 0;
            transform: translateY(100%);
        }
        100%{
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .container {
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .front,
    .back {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
        text-align: center;
        min-height: 260px;
        height: auto;
        border-radius: 10px;
        color: ${p => p.theme.color.text_color};
        font-size: 24px;
        backface-visibility: hidden;
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }

    .back{
        background: #cedce7;
        background: linear-gradient(45deg,  #cedce7 0%, #596a72 100%);
    }

    .container:hover .front,
    .container:hover .back{
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }

    .back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .inner{
        transform: translateY(-50%) translateZ(60px) scale(0.94);
        top: 50%;
        position: absolute;
        left: 0;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        outline: 1px solid transparent;
        perspective: inherit;
        z-index: 2;
        display: flex;
        align-items: center;
        flex-direction: column;


        @media screen and (min-width: 900px){
            padding: 26px;
        }
    }

    .container .back{
        transform: rotateY(180deg);
        transform-style: preserve-3d;
    }

    .container .front{
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }

    .container:hover .back{
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }

    .container:hover .front{
        transform: rotateY(-180deg);
        transform-style: preserve-3d;
    }

    .front .inner p{
        position: relative;
        font-size: 32px;
        margin-bottom: 64px;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .front .inner p:after{
        display: block;
        position: absolute;
        content: '';
        width: 64px;
        height: 4px;
        background: #C6D4DF;
        border-radius: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -35px;
    }

    .front .inner span{
        color: rgba(204,57,0,0.8);
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 26px;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .back .inner p{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 400;

        @media screen and (min-width: 768){
            font-size: 24px;
            font-weight: 500;
        }
    }

    .open-button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        padding: 10px 20px;
        background-color: transparent;
        color: ${p => p.theme.color.black};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        border-radius: 15px;
        stroke: ${p => p.theme.color.main_color};
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition},
                    stroke ${p => p.theme.transition.main_transition};
        @media screen  and (min-width: 768px){
            font-weight: 700;
            font-size: 16px;
            padding: 14px 28px;
        }

        &:hover, 
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
                        
            stroke: ${p => p.theme.color.text_color};
        }
    }

`