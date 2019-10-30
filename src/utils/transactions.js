export const getScale = (minValue, maxValue, value) => ({
  scale: value < 0 ? value / minValue : value / maxValue,
  type: value < 0 ? 'failure' : 'success',
});

export const createTransactionDates = (transactions, isPercent) => {
  const iterableDates = new Map();

  let minValue = 0;
  let maxValue = 0;

  transactions.forEach(transaction => {
    const key = transaction.date;
    if (!iterableDates.has(key)) {
      iterableDates.set(key, { transactions: [transaction] });
    } else {
      iterableDates.get(key).transactions.push(transaction);
    }
  });

  iterableDates.forEach((item, key) => {
    const outcome = item.transactions.reduce((acc, crr) => {
      if (crr.transactionType === 'failed') {
        return acc - crr.amount;
      }
      return acc + crr.amount;
    }, 0);

    if (outcome < minValue) {
      minValue = outcome;
    }
    if (outcome > maxValue) {
      maxValue = outcome;
    }

    const { scale, type } = getScale(minValue, maxValue, outcome);

    const perc = isPercent ? 100 : 1;

    iterableDates.get(key).outcome = outcome;
    iterableDates.get(key).scale = scale * perc;
    iterableDates.get(key).type = type;
  });

  return iterableDates;
};
