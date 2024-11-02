import styled from "styled-components";


export const StackSectionStyled = styled.div`
    padding: 20px 10px;


    @media screen and (min-width: 768px){
        padding: 60px 0 60px 0;
    }
    
    .content-div{
    }

    .main-education-title{
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

    .statistics-title{
        font-size: 36px;
        line-height: 120%;
        font-weight: 500;
        text-align: center;
        margin: 50px 0 20px 0;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 46px;
            font-weight: 600;
        }
    }

    .title{
        font-size: 30px;
        line-height: 120%;
        font-weight: 500;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 36px;
            font-weight: 600;
        }
    }

    .title-descr{
        margin: 10px 0 20px 0;
        font-size: 20px;
        line-height: 120%;
        font-weight: 400;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 780px) {
            margin: 15px 0 40px 0;
            font-size: 26px;
            font-weight: 500;
        }
    }

    .projects-descr-maincont{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .projects-descr-cont{
        background-color: #081b29;
        border-radius: 40px;
        padding: 20px 20px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 5px;
        max-width: 520px;
        margin-top: 40px;

        @media screen and (min-width: 1200px){
            max-width: none;
            width: 800px;
        }
    }   

    .projects-descr-text{
        font-size: 16px;
        text-align: center;
    }
`