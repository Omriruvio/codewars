function presses(phrase) {
    const dict = {
        1: '',
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
      0: ' '
    }
    let total = 0;
    const temp = phrase.toLowerCase().split('');
    temp.forEach(x => {
    if (!isNaN(x) && x !== ' ') {
        total += getDigitStrokes(x)
      } else {
        total += getCharStrokes(x)
      }
      function getCharStrokes (x) {
        for (const value of Object.values(dict)) {
          if (value.includes(x)) return value.indexOf(x) +1 
        }
      }
      function getDigitStrokes (x) {
        return dict[x].length + 1
      }
    })
    
    return total
  }


  console.log(presses('LOL'), 9)
  console.log(presses('1ab'), 4)
  console.log(presses('HOW R U'), 13)