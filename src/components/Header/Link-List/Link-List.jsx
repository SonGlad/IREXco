import { NavLink } from "react-router-dom";
import { LinkListStyled } from "./Link-List.styled";
import { ReactComponent as HomeIcon } from "../../../images/svg-icons/home.svg";
import { ReactComponent as AboutIcon } from "../../../images/svg-icons/user.svg";
import { ReactComponent as SkillsIcon } from "../../../images/svg-icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../../../images/svg-icons/portfolio.svg";
import { ReactComponent as ContactIcon } from "../../../images/svg-icons/contact.svg";
import { useInView } from 'react-intersection-observer';
import { forwardRef } from "react";



export const LinkList = forwardRef(({backToTopRef, toggleMenuBox, toAboutUsRef, toStackRef}, reff) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return(
        <LinkListStyled>
            <ul ref={ref} className={`link-list ${inView ? 'visible' : 'hidden'}`}>
                <li className="link-list-item" style={{'--i': 1}}>
                    <NavLink className='nav-link' to='/'
                        onClick={() => {
                            if (toggleMenuBox) {
                                toggleMenuBox();
                            }
                            backToTopRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            });
                        }}
                    >
                        <HomeIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">Welcome</span>
                    </NavLink>
                </li>
                <li className="link-list-item" style={{'--i': 2}}>
                    <NavLink className='nav-link' 
                        onClick={() => {
                            if (toggleMenuBox) {
                                toggleMenuBox();
                            }
                            toAboutUsRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            });
                        }}
                    >
                        <AboutIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">About Us</span>
                    </NavLink>
                </li>
                <li className="link-list-item" style={{'--i': 3}}>
                    <NavLink className='nav-link'
                        onClick={() => {
                            if (toggleMenuBox) {
                                toggleMenuBox();
                            }
                            toStackRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            });
                        }}
                    >
                        <SkillsIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">Stack</span>
                    </NavLink>
                </li>
                <li className="link-list-item" style={{'--i': 4}}>
                    <NavLink className='nav-link' to='/portfolio' onClick={toggleMenuBox}>
                        <PortfolioIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">Portfolio</span>
                    </NavLink>
                </li>
                <li className="link-list-item" style={{'--i': 5}}>
                    <NavLink className='nav-link' to='/contact' onClick={toggleMenuBox}>
                        <ContactIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">Contact Us</span>
                    </NavLink>
                </li>
            </ul>
        </LinkListStyled>
    )
});