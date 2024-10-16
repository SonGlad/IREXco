import { SecondaryGroupStyled } from "./SecondaryGroup.styled";


export const GroupRoleType = ({type}) => {
    

    return(
        <SecondaryGroupStyled>
            <li className="seconadry-group-item">
                <p><strong>Type:</strong></p>
                <p>{type}</p>
            </li>
        </SecondaryGroupStyled>
    )
};