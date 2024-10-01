import styled from "styled-components";

export const HeroStyled = styled.div`
   padding-top: 58px;
   padding-bottom: 25px;
   display: flex;
   flex-direction: column;
   min-height: 80vh;


   @media screen and (min-width: 1200px){
      padding-bottom: 60px;
   }


   .title-contaier{
      padding-top: 20px;
      margin-bottom: 20px;

      @media screen and (min-width: 1200px){
         margin-bottom: 0;
      }
   }

   .title{
      font-size: 28px;
      line-height: 120%;
      font-weight: 700;
      text-align: center;
      opacity: 0;
      animation: titleSlideDown 1s ease forwards;

      & span{
         color: ${p => p.theme.color.main_color};
         font-size: 56px;
         font-family: "Racing Sans One";
         font-weight: 400;
      }

      @media screen and (min-width: 768px){
         font-size: 48px;

         & span {
            font-size: 68px;
         }
      }
   }

   @keyframes titleSlideDown {
      0%{
         opacity: 0;
         transform: translateY(-100%);
      }
      100%{
         opacity: 1;
         transform: translateY(0px);
      }
   }
   
   .title-below-cont{
      height: 48px;
      @media screen and (min-width: 610px){
         height: 25px;
      }
   }
   
   .title-below{
      font-size: 18px;
      margin-top: 10px;
      line-height: 120%;
      font-weight: 700;
      text-align: center;

      @media screen and (min-width: 768px){
         font-size: 30px;
      }
   }


   .redirect-cont-small-screen{
      margin-top: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 1200px){
         display: none;
      }
   }
   
   .redirext-list{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      column-gap: 10px;
      row-gap: 20px;
      flex-wrap: wrap;
      max-width: 390px;

      @media screen and (min-width: 768px){
         max-width: none;
         width: 750px;
         justify-content: space-between;
      }
   }

   .redirect-link{ 
      padding: 10px 20px;
      border-radius: 15px;
      font-size: 16px;
      font-weight: 700;
      background-color: ${p => p.theme.color.text_color};
      color: ${p => p.theme.color.main_color};
      box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                  0px 0px 0px 0px rgba(0,0,0,0.3);
      transition: color ${p => p.theme.transition.main_transition},
                  fill ${p => p.theme.transition.main_transition}, 
                  background-color ${p => p.theme.transition.main_transition},
                  box-shadow ${p => p.theme.transition.main_transition};
      animation: redirectLinkAppear 1s ease forwards;
      animation-delay: calc((0.3s * var(--i) + 0.1s));
      opacity: 0;

      &:hover{
         background-color: ${p => p.theme.color.main_color};
         color: ${p => p.theme.color.text_color};
         fill: ${p => p.theme.color.text_color};
         box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                     0px 0px 10px 10px rgba(0,0,0,0.3);
      }

      @media screen and (max-width: 767px){
         margin: auto;
      }
   }

   @keyframes redirectLinkAppear {
      0%{
         scale: 0.5;
         opacity: 0;
      }
      100%{
         scale: 1;
         opacity: 1;
      }
   }

   .redirect{
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      fill: ${p => p.theme.color.second_bg_color};
   }

   .redirect-icon-rotate{
      transform: scaleX(-1);
   }


   .description-cont{
      margin-top: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: translateY(25%);
      transition: opacity 1s ease,
                  transform 1s ease;
 
      @media screen and (min-width: 1200px){
         margin-top: 15px;
      }
   }

   .active .description-cont{
      opacity: 1;
      transform: translateY(0%);
   }

   .description-list{
      background-color: ${p => p.theme.color.bg_color};
      border-radius: 40px;
      padding: 40px 20px;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 5px;
      max-width: 320px;

      @media screen and (min-width: 1200px){
         max-width: none;
         width: 1200px;
         display: flex;
         align-items: center;
         justify-content: space-between;
      }

      & .description-item{
         margin-top: 40px;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 10px;

         @media screen and (min-width: 1200px){
            margin-top: 0;
            max-width: 285px;
         }

         & .description-title{
            font-size: 21px;
            @media screen and (min-width: 1200px){
               font-size: 24px;
            }
         }
         & .description-text{
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            @media screen and (min-width: 1200px){
               font-size: 16px;
            }
         }
      }

      & .description-item:first-child{
         margin-top: 0;
      }

      & .icon-cont{
         position: relative;
      }

      & .description-icon{
         width: 60px;
         height: 60px;
         stroke: ${p => p.theme.color.main_color};
         fill: none;
      }

      .description-icon-user{
         stroke: ${p => p.theme.color.main_color};
         fill: none;
         position: absolute;
         top: -6%;
         left: 30%;
         stroke-width: 2px;
      }
      
      & .description-icon-hands{
         width: 60px;
         height: 60px;
         stroke-width: 20px;
         stroke: ${p => p.theme.color.main_color};
      }
      
   }
   

   .canvas-container{
      opacity: 1;
      height: calc(100vw * 0.5);
      max-height: 500px;
      width: 100%;

      @media screen and (min-width: 1200px){
         position: relative;
      }
   }


   .redirext-list-left,
   .redirext-list-right{
      display: none;

      @media screen and (min-width: 1200px){
         position: absolute;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         gap: 80px;
         padding: 16px;
         z-index: 1;
         height: 100%;
      }
   }

   .redirext-list-left{
      top: 0;
      left: 0;
      margin-left: calc(100vw * 0.05);
   }

   .redirext-list-right{
      top: 0;
      right: 0;
      margin-right: calc(100vw * 0.05);
   }
`