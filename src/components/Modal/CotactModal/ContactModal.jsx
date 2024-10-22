import { ContactModalStyled } from "./ContactModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";



export const ContactModal = ({handleClickClose, isSuccess, siteLanguage}) => {
    const { contactModal } = siteLanguage;

    return(
        <ContactModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="icon" width={12} height={12}/>
            </button>
            {isSuccess ? (
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <SuccsessIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text sucsess">{contactModal.text1}</p>
                        </div>
                        <p className="contact-modal-text">{contactModal.text2}</p>
                    </div>
                    <button type='button' className="continue-btn" onClick={handleClickClose}>{contactModal.buttonText}</button>
                </div>
            ):(
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <ErrorIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text error">{contactModal.text3}</p>
                        </div>
                        <p className="contact-modal-text">{contactModal.text4}</p>
                    </div>
                    <button type='button' className="continue-btn" onClick={handleClickClose}>{contactModal.buttonText}</button>
                </div>
            )}
        </ContactModalStyled>
    )
};