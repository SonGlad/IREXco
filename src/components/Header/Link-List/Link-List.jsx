import { LinkListStyled } from "./Link-List.styled";
import { ReactComponent as HomeIcon } from "../../../images/svg-icons/home.svg";
import { ReactComponent as AboutIcon } from "../../../images/svg-icons/user.svg";
import { ReactComponent as SkillsIcon } from "../../../images/svg-icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../../../images/svg-icons/portfolio.svg";
import { ReactComponent as ContactIcon } from "../../../images/svg-icons/contact.svg";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';
import { useRef } from "react";



export const LinkList = ({toggleMenuBox, siteLanguage}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { header } = siteLanguage;
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const stackRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    


    const toggle = (data, event) => {
        console.log('Click event:', event);
        console.log('Clicked section:', data); 
        
        if (toggleMenuBox) {
            toggleMenuBox();
        }
    }

    return(
        <LinkListStyled>
            <ul ref={ref} className={`link-list ${inView ? 'visible' : ''}`}>
                <li className="link-list-item" style={{'--i': 1}} ref={heroRef}>
                    <ScrollIntoView selector="#HeroSection" className='nav-link' onClick={(event) => toggle(event, 'hero')}>
                        <HomeIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu1}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 2}}  ref={aboutRef}>
                    <ScrollIntoView selector="#AboutSection" className='nav-link' onClick={(event) => toggle(event, 'about')}>
                        <AboutIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu2}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 3}} ref={stackRef}>
                    <ScrollIntoView selector="#StackSection" className='nav-link' onClick={(event) => toggle(event, 'stack')}>
                        <SkillsIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu3}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 4}} ref={portfolioRef}>
                    <ScrollIntoView selector="#PortfolioSection" className='nav-link' onClick={(event) => toggle(event, 'portfolio')}>
                        <PortfolioIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu4}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 5}} ref={contactRef}>
                    <ScrollIntoView selector="#ContactSection" className='nav-link' onClick={(event) => toggle(event, 'contact')}>
                        <ContactIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu5}</span>
                    </ScrollIntoView>
                </li>
            </ul>
        </LinkListStyled>
    )
};