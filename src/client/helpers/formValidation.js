import {
  minLength,
  maxLength,
  errorMessages,
  regExpPatterns,
} from './validationHelpers';

export const formValidation = (formData) => {
  const errors = {};
  const patterns = regExpPatterns(formData.password);

  Object.keys(formData).forEach((fieldValue) => {
    if (formData[fieldValue]) {
      if (formData[fieldValue].length <= minLength[fieldValue]) {
        errors[fieldValue] = errorMessages(fieldValue, minLength[fieldValue]).toShort;
      } else if (formData[fieldValue].length >= maxLength[fieldValue]) {
        errors[fieldValue] = errorMessages(fieldValue, maxLength[fieldValue]).toLong;
      } else if (!patterns[fieldValue].test(formData[fieldValue])) {
        errors[fieldValue] = errorMessages(fieldValue).failedRegExp;
      }
    } else {
      errors[fieldValue] = errorMessages(fieldValue).emptyField;
    }
  });

  return errors;
};
