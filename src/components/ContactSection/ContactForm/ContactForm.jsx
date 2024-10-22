import { ContactFormStyled } from "./ContactForm.styled";
import {ReactComponent as UserIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/contact.svg";
import {ReactComponent as SubjectIcon} from "../../../images/svg-icons/skills.svg";
import {ReactComponent as CheckedIcon} from "../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../images/svg-icons/rectangle.svg";
import {ReactComponent as PhoneIcon} from "../../../images/svg-icons/phone.svg";
import { useFormik } from "formik";
import { ContactFormSchema } from "../../../utils/ValidationSchema";
import { ShowRules } from "../../../utils/ShowRules";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { AsYouType } from 'libphonenumber-js';
import useGeoLocation from "react-ipgeolocation";


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;


export const ContactForm = ({openContactModal, setSuccess, setIsLoading, siteLanguage}) => {
    const [formChanged, setFormChanged] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const location = useGeoLocation();
    const country = location.country ? location.country.toLowerCase() : "";
    const { form } = siteLanguage.contact;
  
     

    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
      } = useFormik({

        initialValues: {
            name: '',
            email: '',
            phone: phoneNumber,
            subject: '',
            user_comment: '',
            user_agreement: false,
        },

        validationSchema: ContactFormSchema(form),

        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);
            
            setIsLoading(true);
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                to_name: 'Oleg',
                from_name: values.name,
                from_email: values.email,
                from_phone: formattedNumber,
                to_email: 'okoshevy@gmail.com',
                subject: values.subject,
                message: values.user_comment
            }, PUBLIC_KEY)
            .then(() => {
                setIsLoading(false);
                setSuccess(true);
                openContactModal();
                setFormChanged(false);
                resetForm({
                    values: {
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        user_comment: '',
                        user_agreement: false
                    },
                })
                setPhoneNumber('')
                }, 
                (error) => {
                    setIsLoading(false);
                    setSuccess(false);
                    openContactModal();
                    console.error(error);
                }
            )
        },
    });


    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors, form);


    useEffect(() => {
        if (
          values.name !== '' ||
          values.email !== '' ||
          values.subject !== '' ||
          values.phone !== '' ||
          values.user_agreement !== false
        ) {
            setFormChanged(true);
        } 
    },[values.email, values.name, values.phone, values.subject, values.user_agreement]);


    return(
        <ContactFormStyled onSubmit={handleSubmit} data-netlify="true">
            <label className="form-label" htmlFor="name" style={{'--i': 0}}>{form.labelValue1}
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("name")}`}
                        type="text" 
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder={form.placeholdervalue1}
                        id='name'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("name")}
                    <UserIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="email" style={{'--i': 1}}>{form.labelValue2}
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("email")}`}
                        type="email" 
                        name="email"
                        title=""
                        placeholder={form.placeholdervalue2}
                        id='email'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("email")}
                    <EmailIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="phone" style={{'--i': 2, "zIndex": '5'}}>{form.labelValue3}
                <div className="form-group">
                    <PhoneIcon className="form-icon" width={20} height={20}/>
                    <PhoneInput
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: false,
                            id: "phone",
                        }}
                        onBlur= {handleBlur} 
                        value={phoneNumber}
                        onChange={phone => {
                            handleChange({ target: { name: 'phone', value: phone } });
                            setPhoneNumber(phone);
                        }}
                        containerClass = 'form-label-pnone'
                        inputClass = {`form-field`}
                        buttonClass = "dropdown-cont"
                        country={country || 'ua'}
                        placeholder={form.placeholdervalue3}
                        autoFormat={true}
                        countryCodeEditable={false}
                        enableSearch={true}
                        disableSearchIcon={false}
                    />
                    {getInputAlert("phone")}
                </div>
            </label>
            <label className="form-label" htmlFor="subject" style={{'--i': 3}}>{form.labelValue4}
                <div className="form-group">
                    <input
                        className={`form-field ${getInputClass("subject")}`}
                        type="text" 
                        name="subject"
                        title=""
                        placeholder={form.placeholdervalue4}
                        id='subject'
                        autoComplete="off"
                        required
                        onChange={handleChange}
                        value={values.subject}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("subject")}
                    <SubjectIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="user_comment" style={{'--i': 4}}>{form.labelValue5}
                <textarea 
                    className="form-comment" 
                    name="user_comment" 
                    id="user_comment" 
                    rows="6" 
                    placeholder={form.placeholdervalue5}
                    onChange={handleChange}
                    value={values.user_comment}
                    onBlur={handleBlur}
                ></textarea>
            </label>
            <label className="form-label form-agreement" htmlFor="user_agreement">
                <input 
                    className="form-checkbox"
                    type="checkbox"
                    name="user_agreement"
                    id="user_agreement"
                    onChange={handleChange}
                    value={values.user_agreement}
                    onBlur={handleBlur}
                    checked={values.user_agreement === true}
                />
                <CheckBoxIcon className="custom-checkbox-before" width={18} height={18}/>
                <CheckedIcon className="custom-checkbox-after" width={18} height={18}/>
                <span className="form-desc">
                {form.checkBox}
                </span> 
            </label>
            <div className="btn-cont">
                <button type="submit" className="submit-button"
                    disabled={!isValid || !formChanged}
                >{form.submitBtn}
                </button>
            </div>
        </ContactFormStyled>
    )
};