// kata - https://www.codewars.com/kata/58291fea7ff3f640980000f9

type Developer = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  language: string;
  age: number;
};

const allContinents = (list: Array<Developer>): Boolean => {
  const continents = new Set(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
  for (const { continent } of list) {
    continents.delete(continent);
  }
  return continents.size === 0;
};

describe('Tests', () => {
  it('test', () => {
    var list1 = [
      { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
      { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
      { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
      { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
      { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
    ];

    var list2 = [{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }];

    expect(allContinents(list1)).toBe(true);
    expect(allContinents(list2)).toBe(false);
  });
});
