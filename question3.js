let changePossibilities = (amount, denominations) => {
  let combinations = [];
  for (let i = 0; i <= amount; i++) {
    combinations[i] = 0;
  }
  combinations[0] = 1;

  for (let j = 0; j < denominations.length; j++) {
    let coin = denominations[j];

    for (let higherAmt = coin; higherAmt <= amount; higherAmt++) {
      const remainder = higherAmt - coin;
      combinations[higherAmt] += combinations[remainder];
    }
  }
  return combinations[amount];
}
