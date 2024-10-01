import {HeroSectionStyle, AboutSectionStyled} from './Section.styled';



export const HeroSection = ({children}) => {
    return (
        <HeroSectionStyle>
            {children}
        </HeroSectionStyle>
    );
};


export const AboutSection = ({children}) => {
    return (
        <AboutSectionStyled>
            {children}
        </AboutSectionStyled>
    );
};