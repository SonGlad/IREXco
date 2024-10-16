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
}) => {


    return(
        <DescriptionStyled>
            <MainGroup 
                name={name}
                homepage={homepage}
            />
            <GroupRoleType
                type={type}
            />
            <GroupLink
                technical={technical}
                figma={figma}
            />
            <Technologies
                technologies={technologies}
            />
            <Libraries
                libraries={libraries}
            />
        </DescriptionStyled>
    )
};