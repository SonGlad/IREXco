import { FooterStyled } from "./Footer.styled";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../images/svg-icons/linkedin.svg";
import Logo from "../../images/images/iReX_logo.png";
import Profile from "../../utils/profile.json";
import { useInView } from 'react-intersection-observer';
import { forwardRef } from "react";



export const Footer = forwardRef(({backToTopRef}, reff) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const {facebook_link, linkedin_link, telegram_link, name1, name2} = Profile;



    return (
        <FooterStyled>
            <Container>
                <div ref={ref} className={`footer-container ${inView ? 'visible' : 'hidden'}`}>
                    <div className="footer-left-cont order-one"
                        onClick={() => {
                            backToTopRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            });
                        }}
                    >
                        <p className="footer-text-left"><span>{name1}</span> {name2}</p>
                    </div>
                    <div className="footer-center-cont order-two">
                        <p className="footer-text-center">Copyright<span> &#169; </span>2024</p>
                        <div className="cont-for-foo-pic">
                            <img className="footer-img" src={Logo} alt="irex_logo"/>
                        </div>
                    </div>
                    <div className="footer-right-cont order-three">
                        <p className="footer-text-right">Find <span>Us</span> On:</p>
                        <ul className="footer-social-list">
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={facebook_link}
                                    aria-label="Facebook link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <FacebookIcon className="footer-icon" width={22} height={22}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={linkedin_link}
                                    aria-label="Linkedin link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <LinkedinIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={telegram_link}
                                    aria-label="Telegram link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <TelegramIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </FooterStyled>
    )
});