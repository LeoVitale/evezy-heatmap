import React from 'react';
import HeatMapCalendar from 'components/HeatMapCalendar';
import { createTransactionDates } from 'utils/transactions';
import { GlobalStyles } from 'styles';
import { dates } from 'mock/data.json';

const App = props => {
  return (
    <div>
      <GlobalStyles />
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
