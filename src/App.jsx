import React from 'react';
import HeatMapCalendar from 'components/HeatMapCalendar';
import { createTransactionDates } from 'utils/transactions';
import { GlobalStyles, Container, Title } from 'styles';
import { dates } from 'mock/data.json';

const App = props => {
  return (
    <Container>
      <GlobalStyles />
      <Title>Financial Transaction Heatmap</Title>
      <HeatMapCalendar
        startDate="2019-01-01"
        endDate="2019-12-31"
        data={createTransactionDates(dates)}
      />
    </Container>
  );
};

App.propTypes = {};

export default App;
