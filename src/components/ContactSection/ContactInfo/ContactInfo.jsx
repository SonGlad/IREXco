import { ContactInfoStyled } from "./ContactInfo.styled";
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../../images/svg-icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../images/svg-icons/instagram.svg";
import {ReactComponent as PhoneIcon} from "../../../images/svg-icons/phone.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/contact.svg";


export const ContactInfo = ({ siteLanguage, profileLanguage}) => {
    const {
        facebook_link, 
        linkedin_link, 
        telegram_link, 
        telegram_link2,
        instagram_link, 
        phone,
        phone2,
        email,
        email2,
        about4,
        about6,
        userName1,
        userName2,
    } = profileLanguage;
    const { contact } = siteLanguage;


    return(
        <ContactInfoStyled>
            <h2 className="container-title">{contact.subTitle}</h2>
            <p className="contact-description">{about4}</p>
            <p className="contact-description">{about6}</p>
            <address className="page-contact">
                <ul className="contact-links">
                    <li className="contact-link-item contact-link-mail">
                        <NavLink className="contact-link" to="mailto:okoshevy@gmail.com">
                            <EmailIcon className="contact-icon" width={18} height={18}/>
                            <span>{email}</span>
                        </NavLink>
                    </li>
                    <li className="contact-link-item contact-link-mail2">
                        <NavLink className="contact-link email2" to="mailto:okoshevy@gmail.com">
                            <EmailIcon className="contact-icon" width={18} height={18}/>
                            <span>{email2}</span>
                        </NavLink>
                    </li>
                    <li className="contact-link-item contact-link-tel">
                        <NavLink className="contact-link" to="tel:+30674838965">
                            <PhoneIcon className="contact-icon" width={18} height={18}/>
                            <span>{phone}</span>
                        </NavLink>
                    </li>
                    <li className="contact-link-item contact-link-tel">
                        <NavLink className="contact-link" to="tel:+30674838965">
                            <PhoneIcon className="contact-icon" width={18} height={18}/>
                            <span>{phone2}</span>
                        </NavLink>
                    </li>
                </ul>
            </address>
            <ul className="contact-social-list">
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={facebook_link}
                        aria-label="Facebook link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FacebookIcon className="contact-social-icon" width={26} height={26}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={linkedin_link}
                        aria-label="Linkedin link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <LinkedinIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
                <li className="contact-social-item relative-position">
                    <button type='button' aria-label='Telegram Link' className="contact-social-link">
                        <TelegramIcon className="contact-social-icon" width={24} height={24}/>
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
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={instagram_link}
                        aria-label="Telegram link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <InstagramIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
            </ul>
        </ContactInfoStyled>
    )
};