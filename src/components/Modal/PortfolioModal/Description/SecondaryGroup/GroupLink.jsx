import { SecondaryGroupStyled } from "./SecondaryGroup.styled";
import { NavLink } from "react-router-dom";
import {ReactComponent as LinkSvg} from "../../../../../images/svg-icons/link2.svg"


export const GroupLink = ({technical, figma, siteLanguage}) => {
    const { portfolioModal } = siteLanguage;

    
    return(
        <SecondaryGroupStyled>
            <li className="seconadry-group-item">
                <p><strong>{portfolioModal.techTask}:</strong></p>
                {technical ? (
                    <NavLink className="repository-link" to={technical}
                        aria-label="technical task link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkSvg className="svg-link" width={16} height={16}/>
                        {portfolioModal.available}
                    </NavLink>
                ) : (
                    <p>{portfolioModal.na}</p>
                )}
            </li>
            <li className="seconadry-group-item">
                <p><strong>{portfolioModal.figmaLink}:</strong></p>
                {figma ? (
                    <NavLink className="repository-link" to={figma}
                        aria-label="repository link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkSvg className="svg-link" width={16} height={16}/>
                        {portfolioModal.available}
                    </NavLink>
                ) : (
                    <p>{portfolioModal.na}</p>
                )}
            </li>
        </SecondaryGroupStyled>
    )
};