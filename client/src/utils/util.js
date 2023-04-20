export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const numToWords = value => {
  let result = '';

  switch (parseInt(value)) {
    case parseInt(1):
      result = 'first';
      break;
    case parseInt(2):
      result = 'second';
      break;
    case parseInt(3):
      result = 'third';
      break;
    case parseInt(4):
      result = 'fourth';
      break;
    case parseInt(5):
      result = 'fifth';
      break;

    default:
      result = 'custom';
      break;
  }

  return result;
};
