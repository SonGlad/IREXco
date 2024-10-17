import { ContactInfoStyled } from "./ContactInfo.styled";
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../../images/svg-icons/linkedin.svg";
import {ReactComponent as PhoneIcon} from "../../../images/svg-icons/phone.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/contact.svg";
import Profile from "../../../utils/profile.json";


export const ContactInfo = () => {
    const {
        facebook_link, 
        linkedin_link, 
        telegram_link, 
        phone,
        email,
        about4,
        about6,
    } = Profile;


    return(
        <ContactInfoStyled>
            <h2 className="container-title">Let's Work Together!</h2>
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
                    <li className="contact-link-item contact-link-mail">
                        <NavLink className="contact-link" to="mailto:okoshevy@gmail.com">
                            <EmailIcon className="contact-icon" width={18} height={18}/>
                            <span>{email}</span>
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
                            <span>{phone}</span>
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
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={telegram_link}
                        aria-label="Telegram link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <TelegramIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
            </ul>
        </ContactInfoStyled>
    )
};