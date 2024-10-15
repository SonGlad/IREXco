import { styled } from "styled-components";


export const CodingChartsStyled = styled.div`


    @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .phases-list{
        width: 100%;
    }

    .phases-item{
        display: flex;
        gap: 10px;
    }

    .phases-styles{
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .small-screen{
        @media screen and (min-width: 1200px) {
            display: none;
        }
    }
    .wide-screen{
        @media screen and (max-width: 1200px) {
            display: none;
        }
    }

    .context{
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    .border-inner{
        width: 30px;
        height: 30px;
        border: 2px solid ${p => p.theme.color.main_color};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        & p{
            font-size: 12px;
            position: relative;
            z-index: 2;
            opacity: 0;
            transition:  opacity 0.350s ease 0.350s;
        }

        @media screen and (min-width: 1200px){
            width: 50px;
            height: 50px;
            border: 4px solid ${p => p.theme.color.main_color};

            & p{
                font-size: 16px;
            }
        }
    }

    .active1 .border-inner,
    .active2 .border-inner,
    .active3 .border-inner,
    .active4 .border-inner,
    .active5 .border-inner,
    .active6 .border-inner{
        & p{
            opacity: 1;
            transition: opacity 0.350s ease  0.350s;
        }
    }


    .absolute{
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 150px;
        height: 150px;
        background-color: ${p => p.theme.color.bg_color};
        transform: translateY(0%);
        transition: transform 0.350s ease  0.350s;
    }

    .active1 .absolute,
    .active2 .absolute,
    .active3 .absolute,
    .active4 .absolute,
    .active5 .absolute,
    .active6 .absolute{
        transform: translateY(100%);
        transition: transform transform 0.350s ease; 
    }

    .border-to-bottom{
        width: 2px;
        flex-grow: 1;
        position: relative;

        &:after{
            position: absolute;
            content: "";
            top: 0px;
            left: 0px;
            background-color: ${p => p.theme.color.main_color};
            width: 2px;
            z-index: 3;
            height: 0%;
            transition: height 0.350s ease;
        }

        @media screen and (min-width: 1200px) {
            &:after{
                width: 4px;
                transform: translateX(-25%);
            }
        }
    }


    .active1 .border-to-bottom,
    .active2 .border-to-bottom,
    .active3 .border-to-bottom,
    .active4 .border-to-bottom,
    .active5 .border-to-bottom,
    .active6 .border-to-bottom{
        &::after{
            height: 100%;
            transition: height 0.350s ease 0.350s;
        }
    }


    .phases-content-cont{
        width: 100%;
        padding: 15px 0;
        opacity: 0;
        transition: opacity 0.70s ease;

        
        @media screen and (min-width: 1200px) {
            display: flex;
            gap: 10px;
            padding: 0;
            opacity: 1;
        }
    }

    .active1 .phases-content-cont,
    .active2 .phases-content-cont,
    .active3 .phases-content-cont,
    .active4 .phases-content-cont,
    .active5 .phases-content-cont,
    .active6 .phases-content-cont{
        @media screen and (max-width: 1199px){
            opacity: 1;
            animation: slide-rotate-hor-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
        }
    }


    @keyframes slide-rotate-hor-bottom {
        0% {
            transform: translateY(0) rotateX(0deg);
        }
        100% {
            transform: translateY(150px) rotateX(90deg);
        }
    }

    .padding-cont{
        @media screen and (min-width: 1200px) {
            padding: 20px 0;
        }
    }

    .image-cont{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 2, 0.5) 0px 10px 10px 5px;

        @media screen and (min-width: 468px){
            height: 150px;
        }
        @media screen and (min-width: 768px){
            height: 250px;
        }
        @media screen and (min-width: 1200px){
            height: 350px;
        }
    }

    .image-padding-cont{
        @media screen and (min-width: 1200px){
            width: 45%;
            transform: translateX(-50%);
            opacity: 0;
            transition: transform 0.7s ease,
                        opacity 0.7s ease;
        }
    }

    .active1 .image-padding-cont,
    .active2 .image-padding-cont,
    .active3 .image-padding-cont,
    .active4 .image-padding-cont,
    .active5 .image-padding-cont,
    .active6 .image-padding-cont{
        transform: translateX(0%);
        opacity: 1;
    } 
    

    .content-padding-cont{
        @media screen and (min-width: 1200px){
            width: 45%;
            display: flex;
            align-items: center;
            transform: translateX(50%);
            opacity: 0;
            transition: transform 0.7s ease,
                        opacity 0.7s ease;
        }
    }

    .active1 .content-padding-cont,
    .active2 .content-padding-cont,
    .active3 .content-padding-cont,
    .active4 .content-padding-cont,
    .active5 .content-padding-cont,
    .active6 .content-padding-cont{
        transform: translateX(0%);
        opacity: 1;
    }


    .text-cont{
        margin-top: 20px;
        border-radius: 10px;
        flex: 1 1 auto;

        @media screen and (min-width: 468px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .text-title{
        text-align: center;
        margin-bottom: 10px;
        font-size: 24px;
    }

    .text{
        font-size: 12px;
        text-indent: 20px;
        text-align: justify;
        background-color: ${p => p.theme.color.bg_color};
        box-shadow: rgba(0, 0, 2, 0.5) 0px 10px 10px 5px;
        border-radius: 15px;
        padding: 0 5px;

        &::first-letter {
            font-size: 24px;
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px){
            font-size: 16px;

            &::first-letter {
                font-size: 32px;
            }

        }
    }


    .order-one{
        order: 1;
    }
    .order-two{
        order: 2;
    }
    .order-three{
        order: 3;
    }

    @media screen and (min-width: 1200px){

        .order-one{
            order: 3;
        }
        .order-two{
            order: 2;
        }
        .order-three{
            order: 1;
        }
    }
`