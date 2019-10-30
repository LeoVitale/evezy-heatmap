import React from 'react';
import HeatMapCalendar from 'components/HeatMapCalendar';
import HeatItemPercentage from 'components/HeatItemPercentage';
import { createTransactionDates } from 'utils/transactions';
import {
  GlobalStyles,
  Container,
  Title,
  ColorScaleContainer,
  ScaleLabel,
  HeatMapContainer,
} from 'styles';
import { dates } from 'mock/data.json';

const LegendComponent = () => (
  <ColorScaleContainer>
    <ScaleLabel>Failure</ScaleLabel>
    <HeatItemPercentage type="failure" scale={100} />
    <HeatItemPercentage type="failure" scale={74} />
    <HeatItemPercentage type="failure" scale={49} />
    <HeatItemPercentage type="failure" scale={24} />

    <HeatItemPercentage />

    <HeatItemPercentage type="success" scale={24} />
    <HeatItemPercentage type="success" scale={49} />
    <HeatItemPercentage type="success" scale={74} />
    <HeatItemPercentage type="success" scale={100} />
    <ScaleLabel>Sucess</ScaleLabel>
  </ColorScaleContainer>
);

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <HeatMapContainer>
        <Title>Financial Transaction Heatmap</Title>
        <HeatMapCalendar
          startDate="2019-01-01"
          endDate="2019-12-31"
          data={createTransactionDates(dates, false)}
          legend={null}
        />
      </HeatMapContainer>

      <HeatMapContainer>
        <Title>Financial Transaction Heatmap</Title>
        <HeatMapCalendar
          startDate="2019-01-01"
          endDate="2019-12-31"
          data={createTransactionDates(dates, true)}
          renderItem={HeatItemPercentage}
          legend={LegendComponent}
        />
      </HeatMapContainer>
    </Container>
  );
};

App.propTypes = {};

export default App;
