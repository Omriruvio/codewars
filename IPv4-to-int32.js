// kata - https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
// convert an ipv4 to 32 bit integer

const ipToInt32 = (ip) => {
  return ip.split('.').reduce((acc, x) => acc * 256 + Number(x));
};

console.log(ipToInt32('128.32.10.1'), 2149583361);
