import { ContactsStyled } from "./Contacts.styled";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { ContactForm } from "./ContactForm/ContactForm";
import { forwardRef } from "react";


export const Contacts = forwardRef(({toContactRef, openContactModal, setSuccess}, ref) => {


    return(
        <ContactsStyled ref={toContactRef}>
            <h1 className="about-title">Contact <span>Us</span></h1>
            <div className="content-container">
                <ContactInfo/>
                <div className="form-container">
                    <span className="animated-span-upper">
                        <span className="animated-span-lower">
                            <ContactForm
                                openContactModal={openContactModal}
                                setSuccess={setSuccess}
                            />
                        </span>
                    </span>
                </div>
            </div>
        </ContactsStyled>
    )
});