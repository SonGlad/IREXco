export const ShowRules = (values, touched, errors, form) => {
  const getFieldName = (fieldName, form) => {
    switch (fieldName) {
      case 'name':
        return {
          label: form.labelValue1,
          message: form.nameCorrect
        };
      case 'email':
        return {
          label: form.labelValue2,
          message: form.emailCorrect
        };
      case 'phone':
        return {
          label: form.labelValue3,
          message: form.phoneCorrect
        };
      default:
        return {
          label: fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
          message: 'is correct'
        };
    }
  };

  const getInputClass = (fieldName) => {
    return !values[fieldName]
      ? ""
      : touched && errors[fieldName]
      ? "ErrorInput"
      : "SuccessInput";
  };

  const getInputAlert = (fieldName) => {
    const { label, message } = getFieldName(fieldName, form)
    return !values[fieldName] ? (
      ""
    ) : touched && errors[fieldName] ? (
      <>
        <p className="ErrorText">{errors[fieldName]}</p>
        <div className="ImgError" />
      </>
    ) : (
      <>
        <p className="SuccessText">{`${label} ${message}`}</p>
        <div className="ImgCorrect" />
      </>
    );
  };

  return { getInputClass, getInputAlert };
};