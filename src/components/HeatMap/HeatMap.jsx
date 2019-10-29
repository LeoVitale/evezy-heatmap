import React from 'react';
import Column from 'components/Column';
import {
  Container,
  ColumnContainer,
  LabelXContainer,
  LabelYContainer,
  LabelY,
} from './styles';

const HeatMap = ({ columns = [], data, xLabels = [], yLabels = [] }) => {
  return (
    <Container>
      <LabelYContainer>
        {yLabels.map((label, index) => (
          <div key={index}>{label}</div>
        ))}
      </LabelYContainer>
      <ColumnContainer>
        {columns.map((column, index) => (
          <Column key={index} items={column} data={data} />
        ))}
      </ColumnContainer>
      <LabelXContainer>
        {xLabels.map((label, index) => (
          <LabelY key={index}>{label}</LabelY>
        ))}
      </LabelXContainer>
    </Container>
  );
};

export default HeatMap;
