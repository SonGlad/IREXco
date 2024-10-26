import { LinkListStyled } from "./Link-List.styled";
import { ReactComponent as HomeIcon } from "../../../images/svg-icons/home.svg";
import { ReactComponent as AboutIcon } from "../../../images/svg-icons/user.svg";
import { ReactComponent as SkillsIcon } from "../../../images/svg-icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../../../images/svg-icons/portfolio.svg";
import { ReactComponent as ContactIcon } from "../../../images/svg-icons/contact.svg";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';
import { useEffect, useState } from "react";



export const LinkList = ({toggleMenuBox, siteLanguage, langValue}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { header } = siteLanguage;
    const [sections, setSections] = useState(null);


    const icons = [HomeIcon, AboutIcon, SkillsIcon, PortfolioIcon, ContactIcon];


    const toggle = () => {        
        if (toggleMenuBox) {
            toggleMenuBox();
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
          entries.forEach(entry => {
            console.log(`Изменение размера в секции: ${entry.target.id}`);
            console.log('Новая высота:', entry.contentRect.height);
            console.log('Новая ширина:', entry.contentRect.width);
          });
        });
    
        const sectionIds = ['#HeroSection', '#AboutSection', '#StackSection', '#PortfolioSection', '#ContactSection'];
    
        sectionIds.forEach(id => {
          const section = document.querySelector(id);
          if (section) {
            resizeObserver.observe(section);
          }
        });
        setSections(sectionIds);
        
        return () => resizeObserver.disconnect();
    },[langValue]);


    return(
        <LinkListStyled>
            <ul ref={ref} className={`link-list ${inView ? 'visible' : ''}`}>
                {sections && sections.map((id, index) => {
                    const Icon = icons[index];
                    return (
                        <li className="link-list-item" key={id}>
                        <ScrollIntoView selector={id} className='nav-link' style={{ '--i': index + 1 }} onClick={toggle}>
                            <Icon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header[`navMenu${index + 1}`]}</span>
                        </ScrollIntoView>
                        </li>
                    );
                })}
                {/* <li className="link-list-item" style={{'--i': 1}} ref={heroRef}>
                    <ScrollIntoView selector="#HeroSection" className='nav-link' onClick={toggle}>
                        <HomeIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu1}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 2}}  ref={aboutRef}>
                    <ScrollIntoView selector="#AboutSection" className='nav-link' onClick={toggle}>
                        <AboutIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu2}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 3}} ref={stackRef}>
                    <ScrollIntoView selector="#StackSection" className='nav-link' onClick={toggle}>
                        <SkillsIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu3}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 4}} ref={portfolioRef}>
                    <ScrollIntoView selector="#PortfolioSection" className='nav-link' onClick={toggle}>
                        <PortfolioIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu4}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 5}} ref={contactRef}>
                    <ScrollIntoView selector="#ContactSection" className='nav-link' onClick={toggle}>
                        <ContactIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{header.navMenu5}</span>
                    </ScrollIntoView>
                </li> */}
            </ul>
        </LinkListStyled>
    )
};