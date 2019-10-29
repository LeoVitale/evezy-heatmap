import React from 'react';
import HeatItem from 'components/HeatItem';
import { Container } from './styles';

const Column = ({ items = [] }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <HeatItem key={`${item}-${index}`} item={item} />
      ))}
    </Container>
  );
};

export default Column;
