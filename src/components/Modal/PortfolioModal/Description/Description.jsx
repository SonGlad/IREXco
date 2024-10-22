import { DescriptionStyled } from "./Description.styled";
import { MainGroup } from "./MainGroup/MainGoup";
import { GroupRoleType } from "./SecondaryGroup/GroupRoleType";
import { GroupLink } from "./SecondaryGroup/GroupLink";
import { Technologies } from "./ThirdGroup/Technologies";
import { Libraries } from "./ThirdGroup/Libraries";


export const DescriptionDiv = ({
    name, 
    type,
    homepage, 
    figma, 
    technical, 
    technologies, 
    libraries, 
    siteLanguage
}) => {


    return(
        <DescriptionStyled>
            <MainGroup 
                name={name}
                homepage={homepage}
                siteLanguage={siteLanguage}
            />
            <GroupRoleType
                type={type}
                siteLanguage={siteLanguage}
            />
            <GroupLink
                technical={technical}
                figma={figma}
                siteLanguage={siteLanguage}
            />
            <Technologies
                technologies={technologies}
                siteLanguage={siteLanguage}
            />
            <Libraries
                libraries={libraries}
                siteLanguage={siteLanguage}
            />
        </DescriptionStyled>
    )
};