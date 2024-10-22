import { SecondaryGroupStyled } from "./SecondaryGroup.styled";


export const GroupRoleType = ({type, siteLanguage}) => {
    const { portfolioModal } = siteLanguage;
    

    return(
        <SecondaryGroupStyled>
            <li className="seconadry-group-item">
                <p><strong>{portfolioModal.type}:</strong></p>
                <p>{type}</p>
            </li>
        </SecondaryGroupStyled>
    )
};