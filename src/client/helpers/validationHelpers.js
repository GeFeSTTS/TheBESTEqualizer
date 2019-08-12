export const minLength = {
  username: 3,
  password: 3,
  passwordConfirmation: 3,
};

export const maxLength = {
  username: 30,
  password: 8,
  passwordConfirmation: 8,
};

export const errorMessages = (fieldName, width) => {
  const failedRegexp = {
    username: 'username must begin with letter',
    email: 'please enter valid email.',
    password: 'password must contain one uppercase letter, one lowercase letter and one number.',
    passwordConfirmation: 'passwords are not the same.',
  };

  return {
    emptyField: `please enter ${fieldName}`,
    toShort: `${fieldName} must contain more than ${width} symbols.`,
    toLong: `${fieldName} must contain less then ${width} symbols.`,
    failedRegExp: `${failedRegexp[fieldName]}`,
  };
};

export const regExpPatterns = confirmPattern => ({
  username: /^[a-zA-Z].*/,
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{1,}$/,
  passwordConfirmation: new RegExp(`\\b${confirmPattern}\\b`),
});
