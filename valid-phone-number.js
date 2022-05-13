// kata - https://www.codewars.com/kata/525f47c79f2f25a4db000025

// P - Input - string representing phone number with format (xxx) xxx-xxxx
// R - Output - boolean representing the validity of the phone number

const validPhoneNumber = (str) => {
  const [prefix, suffix] = str.split(' ');
  const [suffixStart, suffixEnd] = suffix.split('-');
  return !Boolean(
    !prefix || !suffix || !suffixStart || !suffixEnd ||
    prefix.length !== 5 ||
    prefix[0] !== '(' ||
    prefix.slice(-1) !== ')' ||
    suffixStart.length !== 3 ||
    suffixEnd.length !== 4
  );
};

function validPhoneNumberRegex(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber('(123) 456-7890'), true);
console.log(validPhoneNumber('(1111)555 2345'), false);
console.log(validPhoneNumber('(098) 123 4567'), false);
console.log(validPhoneNumber('(123) 456-7890'), true);
