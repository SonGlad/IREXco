import {HeroSectionStyle, AboutSectionStyled, SectionStyled, ContactSectionStyled} from './Section.styled';



export const HeroSection = ({children, propsId}) => {
    return (
        <HeroSectionStyle id={propsId}>
            {children}
        </HeroSectionStyle>
    );
};


export const AboutSection = ({children, propsId}) => {
    return (
        <AboutSectionStyled id={propsId}>
            {children}
        </AboutSectionStyled>
    );
};


export const Section = ({children, propsId}) => {
    return (
        <SectionStyled id={propsId}>
            {children}
        </SectionStyled>
    );
};

export const ContactSection = ({children, propsId}) => {
    return (
        <ContactSectionStyled id={propsId}>
            {children}
        </ContactSectionStyled>
    );
};