import {HeroSectionStyle, AboutSectionStyled, SectionStyled, ContactSectionStyled} from './Section.styled';



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


export const Section = ({children}) => {
    return (
        <SectionStyled>
            {children}
        </SectionStyled>
    );
};

export const ContactSection = ({children}) => {
    return (
        <ContactSectionStyled>
            {children}
        </ContactSectionStyled>
    );
};