import styled from 'styled-components';


export const StyledChart = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;
  display: none;
  text-align: center;

  .chart-title{
    font-size: 12px;
    margin-bottom: 10px;
    background-color: ${p => p.theme.color.bg_color};

    @media screen and (min-width: 768px){
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px){
    display: block;
  }

  .chart-wrapper {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.theme.color.light_theme1};
    position: relative;

    @media screen and (min-width: 768px){
      width: 150px;
      height: 150px;
    }

    @media screen and (min-width: 1200px){
      width: 150px;
      height: 150px;
    }

    & div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      background-color: ${props => props.theme.color.bg_color};
      border-radius: 50%;
      padding: 8px 0;
    }

    & p {
      font-size: 14px;
      color: ${props => props.theme.color.primary_grey};
      font-weight: 400;
      line-height: 1.4;

      @media screen and (min-width: 768px){
        font-size: 22px;
      }
    }
  }
`

