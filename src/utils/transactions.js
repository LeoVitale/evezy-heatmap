export const getScale = (minValue, maxValue, value) => ({
  scale: value < 0 ? value / minValue : value / maxValue,
  type: value < 0 ? 'failure' : 'success',
});

export const createTransactionDates = data => {
  const iterableDates = new Map();
  const objDates = {};

  let minValue = 0;
  let maxValue = 0;

  data.forEach(transaction => {
    const key = transaction.date;
    if (!iterableDates.has(key)) {
      iterableDates.set(key, [transaction]);
    } else {
      iterableDates.get(key).push(transaction);
    }
  });

  iterableDates.forEach((item, key) => {
    const outcome = item.reduce((acc, crr) => {
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

    objDates[key] = { outcome };
  });

  iterableDates.forEach((item, key) => {
    objDates[key] = {
      ...objDates[key],
      ...getScale(minValue, maxValue, objDates[key].outcome),
    };
  });

  return objDates;
};
