import { styled } from "styled-components";


export const FooterStyled = styled.footer`
    padding-bottom: 3px;
    
    .footer-container{
        padding: 40px 0;
        opacity: 0;
        
        @media screen and (min-width: 768px){
            padding: 40px 0 40px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
        }
        @media screen and (min-width: 981px) {
            padding: 40px 0 20px 0;
        }
    }

    .visible{
        opacity: 1;
    }

    
    .visible .footer-left-cont{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        margin-right: 30px;
        opacity: 0;
        transform: translateX(100px);
        cursor: pointer;
        animation: slideLeft 1s ease forwards;

        
        @media screen and (min-width: 768px){
            margin-bottom: 0;
            transform: translate(-50px, 20px);
            animation: slideTopRight 1s ease forwards;
        }
        @media screen and (min-width: 981px){
            margin-right: 0;
        }         
    }

    @keyframes slideLeft {
       0%{
        opacity: 0;
        transform: translateX(100px);
       }
       100%{
        opacity: 1;
        transform: translateX(0px);
       } 
    }
    @keyframes slideTopRight {
       0%{
        opacity: 0;
        transform: translate(-50px, 20px);
       }
       100%{
        opacity: 1;
        transform: translate(0, 0);
       } 
    }


    @media screen and (min-width: 768px){
       .order-one{
        order:1;
       }
       .order-two{
        order:3;
       }
       .order-three{
        order:2;
       }
    }
    
    @media screen and (min-width: 981px){
       .order-one{
        order:1;
       }
       .order-two{
        order:2;
       }
       .order-three{
        order:3;
       }
    }
    
    .footer-text-left{
        font-size: 24px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
            font-size: 30px;
            font-family: "Racing Sans One";
            font-weight: 400;
        }
    }

    .footer-text-center,
    .footer-text-right{
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: calc(24/16);
    }

    .footer-text-right span{
        color: ${p => p.theme.color.main_color};
    }

    .visible .footer-center-cont{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        opacity: 0;
        transform: translateX(-100px);
        animation: slideRight 1s ease forwards;
        
        & span{
            color: ${p => p.theme.color.main_color};
            font-weight: 600;
        }
        
        @media screen and (min-width: 768px){
            transform: translate(0px, 30px);
            margin-bottom: 0;
            margin-left: auto;
            margin-right: auto;
            animation: slideTop 1s ease forwards;
        }
    }


    @keyframes slideRight {
       0%{
        opacity: 0;
        transform: translateX(-100px);
       }
       100%{
        opacity: 1;
        transform: translateX(0px);
       } 
    }
    @keyframes slideTop {
       0%{
        opacity: 0;
        transform: translate(0px, 30px);
        scale: 0.7;
       }
       100%{
        opacity: 1;
        transform: translate(0, 0);
        scale: 1;
       } 
    }
    

    .cont-for-foo-pic{
        position: relative;
        width: 50px;
        height: 50px;
        margin-left: 5px;
        transition: scale ${p => p.theme.transition.main_transition};
    }

    .footer-img{
        position: absolute;
        width: 100px;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-36%, -50%) scale(1.3);
        transition: transform ${p => p.theme.transition.main_transition};
    }


    .visible .footer-right-cont{
        display: flex;
        align-items: center;
        gap: 20px;
        opacity: 0;
        transform: translateX(100px);
        animation: slideContLeft 1s ease forwards;

        @media screen and (min-width: 768px){
            transform: translate(50px, 20px);
            animation: slideTopLeft 1s ease forwards;
        }
    }


    @keyframes slideContLeft {
       0%{
        opacity: 0;
        transform: translateX(100px);
       }
       100%{
        opacity: 1;
        transform: translateX(0px);
       } 
    }
    @keyframes slideTopLeft {
       0%{
        opacity: 0;
        transform: translate(50px, 20px);
       }
       100%{
        opacity: 1;
        transform: translate(0, 0);
       } 
    }


    .footer-social-list{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .footer-social-link{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.12),
        0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        background-color: ${p => p.theme.color.text_color};
        fill: ${p => p.theme.color.main_color};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        
        &:hover,
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 5px 5px rgba(204, 57, 0, 0.12),
            0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        }
    }

    .relative-position{
        position: relative;
    }

    .telegram-link-list{
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: -250%;
        left: 0;
        z-index: 5;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(20%, 0);
        transition: visibility ${p => p.theme.transition.main_transition},
                    opacity ${p => p.theme.transition.main_transition};
        @media screen and (min-width: 768px){
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    .relative-position:hover .telegram-link-list{
        visibility: visible;
        opacity: 1;
    }

    .telegram-social-link{
        font-weight: 400;
        font-size: 16px;
        transition: all ${p => p.theme.transition.main_transition};
        &:hover{
            color: ${p => p.theme.color.main_color};
            font-weight: 800;
            font-size: 20px;
        }
    }

`