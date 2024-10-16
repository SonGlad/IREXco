import { PortfolioModalStyled } from "./PortfolioModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { SwiperDiv } from "./Swiper/Swiper";
import { ChartDiv } from "./Chart/Chart";
import { DescriptionDiv } from "./Description/Description";



export const PortfolioModal = ({handleClickClose, portfolioModalData}) => {


 
    return(
        <PortfolioModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="icon" width={12} height={12}/>
            </button>
            <div className="border-div">
                <SwiperDiv img_url={portfolioModalData.img_url}/>
                <div className="content-cont">
                    <ChartDiv languages={portfolioModalData.languages}/>
                    <DescriptionDiv
                        name={portfolioModalData.name}
                        type={portfolioModalData.type}
                        homepage={portfolioModalData.homepageUrl}
                        figma={portfolioModalData.figma_url}
                        technical={portfolioModalData.technical_task}
                        technologies={portfolioModalData.technologies}
                        libraries={portfolioModalData.libraries}
                    />
                </div>
                <div className="description-cont">
                    <p>{portfolioModalData.description}</p>
                </div>
            </div>
        </PortfolioModalStyled>
    )
};