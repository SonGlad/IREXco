import { FooterStyled } from "./Footer.styled";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../images/svg-icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../images/svg-icons/instagram.svg";
import Logo from "../../images/images/iReX_logo.png";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';



export const Footer = ({siteLanguage, profileLanguage}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { footer } = siteLanguage;

    const {
        facebook_link, 
        linkedin_link, 
        telegram_link, 
        telegram_link2, 
        instagram_link, 
        name1, 
        name2,
        userName1,
        userName2,
    } = profileLanguage;



    return (
        <FooterStyled>
            <Container>
                <div ref={ref} className={`footer-container ${inView ? 'visible' : ''}`}>
                    <ScrollIntoView selector="#hero">
                        <div className="footer-left-cont order-one">
                            <p className="footer-text-left"><span>{name1}</span> {name2}</p>
                        </div>
                    </ScrollIntoView>
                    <div className="footer-center-cont order-two">
                        <p className="footer-text-center">Copyright<span> &#169; </span>2024</p>
                        <div className="cont-for-foo-pic">
                            <img className="footer-img" src={Logo} alt="irex_logo"/>
                        </div>
                    </div>
                    <div className="footer-right-cont order-three">
                        <p className="footer-text-right">{footer.text1} <span>{footer.text2}</span> {footer.text3}:</p>
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
                            <li className="footer-social-item relative-position">
                                <button type='button' aria-label='Telegram Link' className="footer-social-link">
                                    <TelegramIcon className="contact-social-icon" width={20} height={20}/>
                                </button>
                                <ul className="telegram-link-list">
                                    <li className="telegram-list-item">
                                        <NavLink className="telegram-social-link" to={telegram_link}
                                            aria-label="Telegram link"
                                            target="_blank"
                                            rel="noreferrer noopener">{userName1}
                                        </NavLink>
                                    </li>
                                    <li className="telegram-list-item">
                                        <NavLink className="telegram-social-link" to={telegram_link2}
                                            aria-label="Telegram link"
                                            target="_blank"
                                            rel="noreferrer noopener">{userName2}
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={instagram_link}
                                    aria-label="Telegram link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <InstagramIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </FooterStyled>
    )
};