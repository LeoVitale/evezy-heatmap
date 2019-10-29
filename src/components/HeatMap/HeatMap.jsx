import React from 'react';
import Column from 'components/Column';
import { Container, ColumnContainer } from './styles';

const HeatMap = ({ columns = [] }) => {
  return (
    <Container>
      <ColumnContainer>
        {columns.map((column, index) => (
          <Column key={index} items={column} />
        ))}
      </ColumnContainer>
    </Container>
  );
};

export default HeatMap;
