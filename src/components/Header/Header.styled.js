import { styled } from "styled-components";


export const StyledHeader = styled.header`
    border-radius: none;
    position: fixed;
    width: 100%;
    z-index: 100;
    backdrop-filter: ${props => props.$headerBackground && "blur(10px)"};
    
    
    .header-container{
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-link{
        position: relative;
        width: 34px;
        height: 34px;
    }

    .header-logo{
        position: absolute;
        max-width: 65px;
        height: auto;
        z-index: 1;
        top: -60%;
        left: 0;
        fill: ${p => p.theme.color.text_color};
        transition: fill ${p => p.theme.transition.main_transition};
        animation: slideLogoRight 1s ease forwards;


        &:hover, &:focus{
            fill: ${p => p.theme.color.main_color};
        } 
    }

    @keyframes slideLogoRight {
        0%{
            opacity: 0;
            transform: translateX(-100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .mob-menu-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        animation: slideButtonLeft 1s ease forwards;
       
        .burger-icon{
            stroke: ${p => p.theme.color.text_color};
        }

        .menu-close-icon{
            fill: transparent;
            stroke: ${p => p.theme.color.text_color};
        }

        @media screen and (min-width: 768px){
            display: none;
        }
    }

    @keyframes slideButtonLeft {
        0%{
            opacity: 0;
            transform: translateX(100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .mob-menu{
        top: 58px;
        left: 0;
        position: absolute;
        z-index: 999;
        width: 100vw;
        height: auto;
        padding-bottom: 20px;
        padding-left: 15px;
        background-color: ${p => p.theme.color.second_bg_color};
        transform: translateX(-100%);
        transition: transform ${p => p.theme.transition.main_transition};
        
        @media screen and (min-width: 768px){
            display: none;
        }
    }

    .is-active{
        transform: translateX(0);
    }

    .main-menu{
        display: none;

        @media screen and (min-width: 768px){
            display: block;
        }
    }
` 