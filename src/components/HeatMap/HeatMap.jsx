import React from 'react';
import Column from 'components/Column';
import {
  Container,
  ColumnContainer,
  LabelXContainer,
  LabelX,
  LabelYContainer,
  LabelY,
} from './styles';

const HeatMap = ({ columns = [], data, xLabels = [], yLabels = [] }) => {
  return (
    <Container>
      <LabelYContainer>
        {yLabels.map((label, index) => (
          <LabelY key={index}>
            <span>{label}</span>
          </LabelY>
        ))}
      </LabelYContainer>
      <ColumnContainer>
        {columns.map((column, index) => (
          <Column key={index} items={column} data={data} />
        ))}
      </ColumnContainer>
      <LabelXContainer>
        {xLabels.map((label, index) => (
          <LabelX key={index}>{label}</LabelX>
        ))}
      </LabelXContainer>
    </Container>
  );
};

export default HeatMap;
