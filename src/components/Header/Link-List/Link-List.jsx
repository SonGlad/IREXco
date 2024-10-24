import { NavLink } from "react-router-dom";
import { LinkListStyled } from "./Link-List.styled";
import { ReactComponent as HomeIcon } from "../../../images/svg-icons/home.svg";
import { ReactComponent as AboutIcon } from "../../../images/svg-icons/user.svg";
import { ReactComponent as SkillsIcon } from "../../../images/svg-icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../../../images/svg-icons/portfolio.svg";
import { ReactComponent as ContactIcon } from "../../../images/svg-icons/contact.svg";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';



export const LinkList = ({toggleMenuBox, siteLanguage}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { header } = siteLanguage;


    const toggle = () => {
        if (toggleMenuBox) {
            toggleMenuBox();
        }
    }

    return(
        <LinkListStyled>
            <ul ref={ref} className={`link-list ${inView ? 'visible' : 'hidden'}`}>
                <li className="link-list-item" style={{'--i': 1}}>
                    <ScrollIntoView selector="#hero">
                        <NavLink className='nav-link' onClick={toggle}>
                            <HomeIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu1}</span>
                        </NavLink>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 2}}>
                    <ScrollIntoView selector="#about">
                        <NavLink className='nav-link' onClick={toggle}>
                            <AboutIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu2}</span>
                        </NavLink>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 3}}>
                    <ScrollIntoView selector="#stack">
                        <NavLink className='nav-link' onClick={toggle}>
                            <SkillsIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu3}</span>
                        </NavLink>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 4}}>
                    <ScrollIntoView selector="#portfolio">
                        <NavLink className='nav-link' onClick={toggle}>
                            <PortfolioIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu4}</span>
                        </NavLink>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 5}}>
                    <ScrollIntoView selector="#contact">
                        <NavLink className='nav-link' onClick={toggle}>
                            <ContactIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">{header.navMenu5}</span>
                        </NavLink>
                    </ScrollIntoView>
                </li>
            </ul>
        </LinkListStyled>
    )
};