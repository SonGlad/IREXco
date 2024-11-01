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


export const StackSectionS = forwardRef(({children, propsId, stackSectionRef},reff) => {
    return (
        <StackSectionStyled id={propsId} ref={stackSectionRef}>
            {children}
        </StackSectionStyled>
    );
});

export const PortfolioSectionS = forwardRef(({children, propsId, portfolioSectionRef},reff) => {
    return (
        <PortfolioSectionStyled id={propsId} ref={portfolioSectionRef}>
            {children}
        </PortfolioSectionStyled>
    );
});

export const ContactSection = forwardRef(({children, propsId, contactSectionRef},reff) => {
    return (
        <ContactSectionStyled id={propsId} ref={contactSectionRef}>
            {children}
        </ContactSectionStyled>
    );
});