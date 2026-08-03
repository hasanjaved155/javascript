const prices = [7, 1, 5, 3, 6, 4];

//brute force

// function bestTimeToBuyAndSell(prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (profit < prices[j] - prices[i])
//         profit = prices[j] - prices[i];
//     }
//   }

//   return profit;
// }

function bestTimeToBuyAndSell(prices) {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    if (profit < prices[i] - minPrice) profit = prices[i] - minPrice;
  }

  return profit;
}

console.log(bestTimeToBuyAndSell(prices));
