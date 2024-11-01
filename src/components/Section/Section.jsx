import {HeroSectionStyle, AboutSectionStyled, StackSectionStyled, PortfolioSectionStyled, ContactSectionStyled} from './Section.styled';
import { forwardRef } from 'react';



export const HeroSection = forwardRef(({children, propsId, heroSectionRef},reff) => {
    return (
        <HeroSectionStyle id={propsId} ref={heroSectionRef}>
            {children}
        </HeroSectionStyle>
    );
});


export const AboutSection = forwardRef(({children, propsId, aboutSectionRef}, reff) => {
    return (
        <AboutSectionStyled id={propsId} ref={aboutSectionRef}>
            {children}
        </AboutSectionStyled>
    );
});


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