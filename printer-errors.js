// kata - https://www.codewars.com/kata/56541980fa08ab47a0000040

// Input - string a-z
// Output - n/len n= amount of non a-m characters len = length of string

const printerError = (str) => {
  return [...str].reduce((acc, x) => {
    if (/[n-z]/.test(x) ) acc[0]++
    return acc;
  }, [0,str.length]).join('/')
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz", "3/56"))