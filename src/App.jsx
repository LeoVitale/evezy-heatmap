import React from 'react';
import { chunk, setDateRange } from './helpers/date';
import { data } from './mock/data.json';

const listOfDates = setDateRange(new Date('2019-01-01'), new Date('2019-12-31'));
const chunkedDates = chunk(listOfDates, 7);

const iterableDates = new Map();
data.forEach(transaction => {
  const key = transaction.date;
  if (!iterableDates.has(key)) {
    iterableDates.set(key, [transaction]);
  } else {
    iterableDates.get(key).push(transaction);
  }
});

const reducedIterableDates = {};
const reducedIterableDates2 = {};
iterableDates.forEach((item, key) => {
  reducedIterableDates2[key] = item.reduce((acc, crr) => {
    if (crr.transactionType === 'failed') {
      return acc - crr.amount;
    }
    return acc + crr.amount;
  }, 0);
});

iterableDates.forEach((item, key) => {
  let failed = 0;
  let success = 0;
  item.forEach(value => {
    if (value.transactionType === 'success') {
      success = success + value.amount;
    }
    if (value.transactionType === 'failed') {
      failed = failed + value.amount;
    }
  });
  const higherValue = Math.max(failed, success);
  const lowerValue = Math.min(failed, success);

  const percent = ((higherValue - lowerValue) / higherValue) * 100;
  reducedIterableDates[key] = {
    percent: Math.floor(percent),
    higherType: success > failed ? 'success' : 'failed',
    success: Math.floor(success),
    failed: Math.floor(failed),
  };
});

const scale = () => {
  let minValue = 0;
  let maxValue = 0;
  chunkedDates.forEach(listOfDates => {
    listOfDates.forEach(date => {
      if (reducedIterableDates[date] && reducedIterableDates[date] < minValue) {
        minValue = reducedIterableDates[date];
      }
      if (reducedIterableDates[date] && reducedIterableDates[date] > maxValue) {
        maxValue = reducedIterableDates[date];
      }
    });
  });

  return { minValue, maxValue };
};

function getRange(upper, lower, steps) {
  const difference = upper - lower;
  const increment = difference / (steps - 1);
  return [
    lower,
    ...Array(steps - 2)
      .fill('')
      .map((_, index) => lower + increment * (index + 1)),
    upper,
  ];
}

console.log('====================================');
console.log(chunkedDates);
console.log(iterableDates);
console.log(reducedIterableDates);
console.log(reducedIterableDates2);
console.log(scale());
console.log('====================================');

const App = () => {
  return <div>ssss</div>;
};

export default App;
