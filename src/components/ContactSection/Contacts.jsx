import { ContactsStyled } from "./Contacts.styled";
// import { ContactInfo } from "./ContactInfo/ContactInfo";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { useInView } from 'react-intersection-observer';



export const Contacts = ({
    openContactModal, 
    setSuccess, 
    setIsLoading,
    siteLanguage,
    profileLanguage
}) => {
    // const { ref, inView } = useInView({
    //     triggerOnce: false,
    //     threshold: 0.1,
    // });
    const { contact } = siteLanguage;


    return(
        <ContactsStyled id="contact">
            <h1 className="about-title">{contact.title1} <span>{contact.title2}</span></h1>
                <div className="content-container">
                    {/* {inView && (
                        <>
                            <ContactInfo
                                siteLanguage={siteLanguage}
                                profileLanguage={profileLanguage}
                            />
                            <div className="form-container">
                                <span className="animated-span-upper">
                                    <span className="animated-span-lower">
                                        <ContactForm
                                            openContactModal={openContactModal}
                                            setSuccess={setSuccess}
                                            setIsLoading={setIsLoading}
                                            siteLanguage={siteLanguage}
                                        />
                                    </span>
                                </span>
                            </div>
                        </>
                    )} */}
                </div>
        </ContactsStyled>
    )
};