import { styled } from "styled-components";


export const LinkListStyled = styled.div`

    .link-list{
        font-size: 18px;
        font-weight: 600;

        @media screen and (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        @media screen and (min-width: 840px){
            gap: 20px;
        }
    }


    .link-list-item{
        margin-top: 20px;

        @media screen and (min-width: 768px){
            visibility: hidden;
            opacity: 0;
            margin-top: 0;
            position: relative;
            cursor: pointer;
            
            & .nav-link {
                &:after{
                    position: absolute;
                }
            }
        }

    }

    .visible .link-list-item{
        @media screen and (min-width: 768px){  
            opacity: 0;
            visibility: hidden;
            animation: slideLinkTop 0.4s ease forwards;
            animation-delay: calc(0.1s * var(--i));
        }
    }

 
    @keyframes slideLinkTop {
        0%{
            visibility: hidden;
            opacity: 0;
            transform: translateY(75px);
        }
        100%{
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .nav-link{
        display: flex;
        align-items: center;
        gap: 3px;
        max-width: 160px;
        fill: ${p => p.theme.color.text_color};
        transition: color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px){
            &:after{
                content: '';
                width: 100%;
                height: 3px;
                border-radius: 50%;
                bottom: -2px;
                background-color: ${p => p.theme.color.main_color};
                transform-origin: right;
                transform: scaleX(0);
                transition: transform ${p => p.theme.transition.main_transition};
            }

            &:focus::after,
            &:hover::after {
                transform-origin: left;
                transform: scaleX(1);
            }
        }

        &:hover, 
        &:focus{
            color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.main_color};
        }
    }
`