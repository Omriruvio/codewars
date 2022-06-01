// kata - https://www.codewars.com/kata/554a44516729e4d80b000012

// Input - parameter start_price_old (Old car price)
// Input - parameter start_price_new (New car price)
// Input - parameter saving_per_month
// Input - parameter percent_loss_by_month

// percent loss affects new car as well, and it increases

// Output - [months to purchase, amount left]

function nbMonths(oldPrice, newPrice, saving, loss) {
  let i = 0;
  let saved = 0;
  while (saved + oldPrice < newPrice) {
    i += 1;
    if (i % 2 === 0) loss += 0.5;
    saved += saving;
    oldPrice -= oldPrice * (loss / 100);
    newPrice -= newPrice * (loss / 100);
  }
  return [i, Math.round(saved + oldPrice - newPrice)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766]);
console.log(nbMonths(12000, 8000, 1000, 1.5), [0, 4000]);
