import { styled } from "styled-components";


export const AboutStyled = styled.div`
    padding: 20px 10px 20px 10px;
    
    @media screen and (min-width: 768px){
        padding: 60px 0 60px 0;
    }
    
    .content-div{
    }

    .about-title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;

        & span{
            color: ${p => p.theme.color.main_color};
        }
    }


    .about-cont {
        margin-bottom: 30px;

        @media screen and (min-width: 768px){
            opacity: 0;
            scale: 0.6;
            transition: opacity 1s ease,
                    scale 1s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &.active{
            opacity: 1;
            scale: 1;
        }
    }


    .coding-container-right{
        @media screen and (min-width: 768px){
            opacity: 0;
            scale: 0.6;
            transition: opacity 1s ease,
                        scale 1s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &.active{
            opacity: 1;
            scale: 1;
        }
    }


    .coding-container-left{
        margin-bottom: 30px;

        @media screen and (min-width: 768px){
            opacity: 0;
            scale: 1.4;
            transition: opacity 1s ease,
                    scale 1s ease;
            display: flex;
            align-items: center;
            justify-content: center;

            .order-one{
                order:2;
            }
            .order-two{
                order:1;
            }
        }

        &.active{
            opacity: 1;
            scale: 1;
        }
    }

    .shadow0 {
        margin: 0 auto;
        width: 300px;
        height: 300px;
        margin-bottom: 20px;
        background-color: ${p => p.theme.color.bg_color};
        
        @media screen and (min-width: 768px) {
            margin-bottom: 0;
        }

        @media screen and (min-width: 1024px) {
            width: 500px;
            margin-right: 10px;
            -moz-border-radius: 240px / 150px;
            -webkit-border-radius: 240px / 150px;
            border-radius: 240px / 150px;
            animation: shadowRound0 10s linear infinite;
        }

        @media screen and (min-width: 1100px){
            margin: 0 auto;
        }
    }

        @keyframes shadowRound0 {
        0%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                20px -20px 20px 20px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                20px -20px 20px 20px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                20px -20px 20px 20px rgba(0, 0, 0, 0.5);
        }
        13%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);

        }
        25%{
            -webkit-box-shadow: -20px 20px 20px 20px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: -20px 20px 20px 20px rgba(0, 0, 0, 0.5) inset, 
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                    box-shadow: -20px 20px 20px 20px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);

        }
        37%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
            
        }
        50%{
            -webkit-box-shadow: 20px -20px 20px 20px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 20px -20px 20px 20px  rgba(0, 0, 0, 0.5) inset, 
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                    box-shadow: 20px -20px 20px 20px  rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
            
        }
        63%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
            
        }
        75%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                -20px 20px 20px 20px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                -20px 20px 20px 20px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                -20px 20px 20px 20px rgba(0, 0, 0, 0.5);
            
        }
        87%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                0px 0px 0px 0px rgba(0, 0, 0, 0.5);
            
        }
        100%{
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                20px -20px 20px 20px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset, 
                                20px -20px 20px 20px rgba(0, 0, 0, 0.5);
                    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5) inset,
                                20px -20px 20px 20px rgba(0, 0, 0, 0.5);

        }
    }

     
    .about-img-cont{
        margin: 0 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }

    .circle-filter{
        position: absolute;
        background-color: ${p => p.theme.color.bg_color};
        z-index: 2;
        border-radius: 50%;
        width: 96%;
        height: 96%;
    }
    
    .about-img{
        position: absolute;
        z-index: 3;
        border: 2px solid ${p => p.theme.color.main_color};
        border-radius: 50%;
        width: 90%;
        max-height: 270px;
    }
    
    .circle-spin1{
        position: absolute;
        top: 0%;
        left: 0%;
        transform: rotate(0);
        border-radius: 150px 0px 0;
        width: 0;
        height: 0;
        border-top: 150px solid ${p => p.theme.color.main_color};
        border-right: 150px solid transparent;
        animation: circleSpinner1 8s linear infinite;
    }

    .circle-spin2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: rotate(0);
        border-radius: 0 0 150px;
        width: 0;
        height: 0;
        border-bottom: 150px solid ${p => p.theme.color.main_color};
        border-left: 150px solid transparent;
        animation: circleSpinner2 8s linear infinite;
    }

    @keyframes circleSpinner1 {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
            -webkit-transform-origin: bottom right;
                    transform-origin: bottom right;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
            -webkit-transform-origin: bottom right;
                    transform-origin: bottom right;
        }
    }
    
    @keyframes circleSpinner2 {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
            -webkit-transform-origin: top left;
                    transform-origin: top left;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
            -webkit-transform-origin: top left;
                    transform-origin: top left;
        }
    }


    .shadow-div{  
        background-color: ${p => p.theme.color.bg_color};

        @media screen and (min-width: 768px){
            max-width: 50%;
            box-shadow: 0px 10px 10px 5px rgba(0,0,2,0.5);
            border-radius: 30px;
            padding: 10px;
        }
    }


    .about-content-text{
        font-size: 16px;
        line-height: 24px;
        text-indent: 20px;
        text-align: justify;

        &::first-letter {
            font-size: 32px;
            color: ${p => p.theme.color.main_color};
        }

        & span{
            font-family: "Racing Sans One";
            font-size: 32px;
            color: ${p => p.theme.color.main_color};
        }
    }

    .shadow1{
        background-color: ${p => p.theme.color.bg_color};
        margin: 0 auto;
        width: 300px;
        height: 300px;

        @media screen and (min-width: 1024px) {
            width: 500px;
            margin-left: 10px;
            -moz-border-radius: 240px / 150px;
            -webkit-border-radius: 240px / 150px;
            border-radius: 240px / 150px;
            animation: shadowRound1 8s linear infinite;
        }

        @media screen and (min-width: 1100px){
            margin: 0 auto;
        }
    }

    .shadow2{
        background-color: ${p => p.theme.color.bg_color};
        margin: 0 auto;
        width: 300px;
        height: 300px;

        @media screen and (min-width: 1024px) {
            width: 500px;
            margin-right: 10px;
            -moz-border-radius: 240px / 150px;
            -webkit-border-radius: 240px / 150px;
            border-radius: 240px / 150px;
            animation: shadowRound2 8s linear infinite;
        }
        
        @media screen and (min-width: 1100px){
            margin: 0 auto;
        }
    }

    @keyframes shadowRound1 {
        0% {
            -webkit-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
        }
        13%{
            -webkit-box-shadow: 20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
        }
        25%{
            -webkit-box-shadow: 20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
        }
        37%{
            -webkit-box-shadow: 20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
        }
        50%{
            -webkit-box-shadow: 0px -20px 0px 20px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 0px -20px 0px 20px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 0px -20px 0px 20px rgba(0, 0, 0, 0.5) inset;
        }
        63%{
            -webkit-box-shadow: -20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: -20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: -20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
        }
        75%{
            -webkit-box-shadow: -20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: -20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: -20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
        }
        87%{
            -webkit-box-shadow: -20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: -20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: -20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
        }
        100% {
            -webkit-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
        }
    }


    @keyframes shadowRound2 {
        0% {
            -webkit-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
        }
        13%{
            -webkit-box-shadow: -20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: -20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: -20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
        }
        25%{
            -webkit-box-shadow: -20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: -20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: -20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
        }
        37%{
            -webkit-box-shadow: -20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: -20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: -20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
        }
        50%{
            -webkit-box-shadow: 0px -20px 0px 20px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 0px -20px 0px 20px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 0px -20px 0px 20px rgba(0, 0, 0, 0.5) inset;
        }
        63%{
            -webkit-box-shadow: 20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 20px -20px 5px 17px rgba(0, 0, 0, 0.5) inset;
        }
        75%{
            -webkit-box-shadow: 20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 20px 0px 10px 14px rgba(0, 0, 0, 0.5) inset;
        }
        87%{
            -webkit-box-shadow: 20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 20px 20px 15px 11px rgba(0, 0, 0, 0.5) inset;
        }
        100% {
            -webkit-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                -moz-box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
                    box-shadow: 0px 20px 20px 8px rgba(0, 0, 0, 0.5) inset;
        }
    }
`