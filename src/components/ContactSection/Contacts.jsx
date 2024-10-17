import { ContactsStyled } from "./Contacts.styled";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { ContactForm } from "./ContactForm/ContactForm";
import { forwardRef } from "react";
import { useInView } from 'react-intersection-observer';



export const Contacts = forwardRef(({toContactRef, openContactModal, setSuccess, setIsLoading}, reff) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return(
        <ContactsStyled ref={toContactRef}>
            <h1 className="about-title" ref={ref}>Contact <span>Us</span></h1>
            {inView && (
                <div className="content-container">
                    <ContactInfo/>
                    <div className="form-container">
                        <span className="animated-span-upper">
                            <span className="animated-span-lower">
                                <ContactForm
                                    openContactModal={openContactModal}
                                    setSuccess={setSuccess}
                                    setIsLoading={setIsLoading}
                                />
                            </span>
                        </span>
                    </div>
                </div>
            )}
        </ContactsStyled>
    )
});