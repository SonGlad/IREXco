import * as Yup from "yup";


const ContactFormSchema = (form) => Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, { message: form.validationNameMatches, excludeEmptyString: true })
    .min(2, form.validationNameMin)
    .max(40, form.validationNameMax)
    .required(form.validationNameRequired),
  email: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, form.validationEmailMatches)
    .email(form.validationEmail)
    .required(form.validationEmailRequired),
  phone: Yup.string()
    .matches(/^\d+$/, form.validationPhoneMatches)
    .min(11, form.validationPhoneMin)
    .max(15, form.validationPhoneMax)
    .required(form.validationPhoneRequired),
  subject: Yup.string()
    .trim()
    .min(2, form.validationSubjectMin)
    .max(40, form.validationSubjectMax)
    .required(form.validationSubjectRequired),
  user_agreement: Yup.boolean()
    .oneOf([true], form.agreementRequired)
    .required(form.agreementRequired)
});



export {
  ContactFormSchema,
};
