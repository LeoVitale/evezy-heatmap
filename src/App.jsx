import React from 'react';
import HeatMapCalendar from 'components/HeatMapCalendar';
import { dates } from 'mock/data.json';

const generateScale = (minValue, maxValue, value) => {
  let scale = 0;
  let type = '';

  if (value < 0) {
    scale = value / minValue;
    type = 'failure';
  }

  if (value > 0) {
    scale = value / maxValue;
    type = 'success';
  }

  return { type, scale };
};

const createTransactionDates = data => {
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
      ...generateScale(minValue, maxValue, objDates[key].outcome),
    };
  });

  return objDates;
};

const App = props => {
  return (
    <div>
      <HeatMapCalendar
        startDate="2019-01-01"
        endDate="2019-12-31"
        data={createTransactionDates(dates)}
      />
    </div>
  );
};

App.propTypes = {};

export default App;
