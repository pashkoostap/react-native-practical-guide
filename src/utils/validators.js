const emailValidator = value => {
  return (
    !!value &&
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      value
    )
  );
};

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

const equalToValidator = (firstValue, secondValue) => {
  return !!firstValue && !!secondValue && firstValue === secondValue;
};

export const inputValidator = (value, rules, connectedValue = {}) => {
  let isValid = true;

  Object.keys(rules).forEach(rule => {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;
      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(value, connectedValue[rule]);
        break;
      default:
        isValid;
        break;
    }
  });

  return isValid;
};
