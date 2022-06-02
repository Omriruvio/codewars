// kata - https://www.codewars.com/kata/54bb6f887e5a80180900046b

// Input - String
// Output - Length of longest palindrome substring

const longestPalindrome = (str, sliceLength = str.length) => {
  const isPalindrome = (str) => [...str.toLowerCase()].reverse().join('') === str.toLowerCase();
  if (str.length === 0) return 0;
  if (sliceLength === 1) return 1;
  for (let i = 0; i < str.length - sliceLength + 1; i++) {
    const current = str.slice(i, sliceLength + i);
    if (isPalindrome(current)) return sliceLength;
  }
  return longestPalindrome(str, sliceLength - 1);
};

console.log(longestPalindrome('a'), 1);
console.log(longestPalindrome('aa'), 2);
console.log(longestPalindrome('baa'), 2);
console.log(longestPalindrome('aab'), 2);
console.log(longestPalindrome('zyabyz'), 1);
console.log(longestPalindrome('baabcd'), 4);
console.log(longestPalindrome('baablkj12345432133d'), 9);
