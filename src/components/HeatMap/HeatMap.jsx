import React from 'react';
import Column from 'components/Column';
import { Container, ColumnContainer } from './styles';

const HeatMap = ({ columns = [], data }) => {
  console.log(data);

  return (
    <Container>
      <ColumnContainer>
        {columns.map((column, index) => (
          <Column key={index} items={column} data={data} />
        ))}
      </ColumnContainer>
    </Container>
  );
};

export default HeatMap;
