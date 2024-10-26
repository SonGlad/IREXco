import {HeroSectionStyle, AboutSectionStyled, StackSectionStyled, PortfolioSectionStyled, ContactSectionStyled} from './Section.styled';



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


export const StackSectionS = ({children, propsId}) => {
    return (
        <StackSectionStyled id={propsId}>
            {children}
        </StackSectionStyled>
    );
};

export const PortfolioSectionS = ({children, propsId}) => {
    return (
        <PortfolioSectionStyled id={propsId}>
            {children}
        </PortfolioSectionStyled>
    );
};

export const ContactSection = ({children, propsId}) => {
    return (
        <ContactSectionStyled id={propsId}>
            {children}
        </ContactSectionStyled>
    );
};