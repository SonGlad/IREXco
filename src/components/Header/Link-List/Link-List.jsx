import { LinkListStyled } from "./Link-List.styled";
import { ReactComponent as HomeIcon } from "../../../images/svg-icons/home.svg";
import { ReactComponent as AboutIcon } from "../../../images/svg-icons/user.svg";
import { ReactComponent as SkillsIcon } from "../../../images/svg-icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../../../images/svg-icons/portfolio.svg";
import { ReactComponent as ContactIcon } from "../../../images/svg-icons/contact.svg";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';
import { useEffect, useState, forwardRef } from "react";



export const LinkList = forwardRef(({
    toggleMenuBox, 
    siteLanguage, 
    langValue,
    isResizeObserver,
    heroSectionRef,
    aboutSectionRef,
    stackSectionRef,
    portfolioSectionRef,
    contactSectionRef,
    stackFilter,
    portfolioFilter
},reff) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { header } = siteLanguage;
    const [sections, setSections] = useState(null);
    // const heightMapRef = useRef({});


    const icons = [HomeIcon, AboutIcon, SkillsIcon, PortfolioIcon, ContactIcon];


    const toggle = () => {        
        if (toggleMenuBox) {
            toggleMenuBox();
        }
    }

    useEffect(() => {
        if (isResizeObserver) {
            const resizeObserver = new ResizeObserver(() => {
            });            
            if (langValue === 'UA') {
                heroSectionRef.current.style.height = '1265px';
                aboutSectionRef.current.style.height='1941px';
                if (!stackFilter) {
                    stackSectionRef.current.style.height='4943px';
                } else {
                    stackSectionRef.current.style.height='auto';
                }
                if (!portfolioFilter) {
                    portfolioSectionRef.current.style.height='4138px';
                } else {
                    portfolioSectionRef.current.style.height='auto';
                }
                contactSectionRef.current.style.height='1532px';
            }
            if (langValue === 'EN') {
                heroSectionRef.current.style.height = '1265px';
                aboutSectionRef.current.style.height='2037px';
                if (!stackFilter) {
                    stackSectionRef.current.style.height='4873px';
                } else {
                    stackSectionRef.current.style.height='auto';
                }
                if (!portfolioFilter) {
                    portfolioSectionRef.current.style.height='4138px';
                } else {
                    portfolioSectionRef.current.style.height='auto';
                }
                contactSectionRef.current.style.height='1424px';                
            }
            if (langValue === 'RU') {
                heroSectionRef.current.style.height = '1301px';
                aboutSectionRef.current.style.height='2061px';
                if (!stackFilter) {
                    stackSectionRef.current.style.height='5097px';
                } else {
                    stackSectionRef.current.style.height='auto';
                }
                if (!portfolioFilter) {
                    portfolioSectionRef.current.style.height='4193px';
                } else {
                    portfolioSectionRef.current.style.height='auto';
                }
                contactSectionRef.current.style.height='1579px';  
            }
            // const resizeObserver = new ResizeObserver(entries => {
            //     entries.forEach(entry => {
            //         const sectionId = entry.target.id;
            //         const newHeight = entry.contentRect.height;
            //         console.log(`Высота секции ${sectionId}:`, newHeight);


            //         if (heightMapRef.current[sectionId] !== newHeight) {
            //             heightMapRef.current[sectionId] = newHeight;
            //             // entry.target.style.height = `${newHeight}px`;
                        
            //             console.log(`Высота секции ${sectionId}:`, newHeight);
            //         }
            //     });
            // });
        
            const sectionIds = ['#HeroSection', '#AboutSection', '#StackSection', '#PortfolioSection', '#ContactSection'];
        
            sectionIds.forEach(id => {
                const section = document.querySelector(id);
                if (section) {
                resizeObserver.observe(section);
                }
            });
            setSections(sectionIds);
            
            return () => resizeObserver.disconnect();
        } else {
            heroSectionRef.current.style.height = 'auto';
            aboutSectionRef.current.style.height='auto';
            stackSectionRef.current.style.height='auto';
            portfolioSectionRef.current.style.height='auto';
            contactSectionRef.current.style.height='auto';  
            return
        }
    },[
        aboutSectionRef, 
        contactSectionRef, 
        heroSectionRef, 
        isResizeObserver, 
        langValue, 
        portfolioFilter, 
        portfolioSectionRef, 
        stackFilter, 
        stackSectionRef
    ]);


    return(
        <LinkListStyled>
            {isResizeObserver ? (
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
                </ul>
            ) : (
                <ul ref={ref} className={`link-list ${inView ? 'visible' : ''}`}>
                    <li className="link-list-item" style={{'--i': 1}}>
                        <ScrollIntoView selector='#HeroSection' className='nav-link' onClick={toggle}>
                            <HomeIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu1}</span>
                        </ScrollIntoView>
                    </li>
                    <li className="link-list-item" style={{'--i': 2}}>
                        <ScrollIntoView selector='#AboutSection' className='nav-link' onClick={toggle}>
                            <AboutIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu2}</span>
                        </ScrollIntoView>
                    </li>
                    <li className="link-list-item" style={{'--i': 3}}>
                        <ScrollIntoView selector='#StackSection' className='nav-link' onClick={toggle}>
                            <SkillsIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu3}</span>
                        </ScrollIntoView>
                    </li>
                    <li className="link-list-item" style={{'--i': 4}}>
                        <ScrollIntoView selector='#PortfolioSection' className='nav-link' onClick={toggle}>
                            <PortfolioIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu4}</span>
                        </ScrollIntoView>
                    </li>
                    <li className="link-list-item" style={{'--i': 5}}>
                        <ScrollIntoView selector='#ContactSection' className='nav-link' onClick={toggle}>
                            <ContactIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu5}</span>
                        </ScrollIntoView>
                    </li>
                </ul> 
            )}
        </LinkListStyled>
    )
});