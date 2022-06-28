// kata - https://www.codewars.com/kata/59f08f89a5e129c543000069

// array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].

const dup = (str) => {
  return str.map((x) => {
    let previous = '';
    return [...x]
      .map((letter) => {
        let result = null;
        if (letter !== previous) result = letter;
        previous = letter;
        if (result) return result;
      })
      .join('');
  });
};

console.log(dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']), ['codewars', 'picaniny', 'hubububo']);
console.log(dup(['abracadabra', 'allottee', 'assessee']), ['abracadabra', 'alote', 'asese']);
console.log(dup(['kelless', 'keenness']), ['keles', 'kenes']);
console.log(dup(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi']), ['Wolomolo', 'flodoromonlighters', 'chuchchi']);
console.log(dup(['adanac', 'soonness', 'toolless', 'ppellee']), ['adanac', 'sones', 'toles', 'pele']);
console.log(dup(['callalloo', 'feelless', 'heelless']), ['calalo', 'feles', 'heles']);
console.log(dup(['putteellinen', 'keenness']), ['putelinen', 'kenes']);
console.log(dup(['kelless', 'voorraaddoosspullen', 'achcha']), ['keles', 'voradospulen', 'achcha']);
