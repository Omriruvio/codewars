// kata - https://www.codewars.com/kata/529eef7a9194e0cbc1000255

const isAnagram = (str1, str2) => [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');

const assertEquals = require('assert').strictEqual;
assertEquals(isAnagram('foefet', 'toffee'), true, 'The word foefet is an anagram of toffee');
assertEquals(isAnagram('Buckethead', 'DeathCubeK'), true, 'The word Buckethead is an anagram of DeathCubeK');
assertEquals(isAnagram('Twoo', 'WooT'), true, 'The word Twoo is an anagram of WooT');
assertEquals(isAnagram('dumble', 'bumble'), false, 'Characters do not match for test case dumble, bumble');
assertEquals(isAnagram('ound', 'round'), false, 'Missing characters for test case ound, round');
assertEquals(isAnagram('apple', 'pale'), false, 'Same letters, but different count');
