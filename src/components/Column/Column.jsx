import React from 'react';
import HeatItem from 'components/HeatItem';
import { Container } from './styles';

const Column = ({ items = [], data }) => {
  return (
    <Container>
      {items.map((item, index) => {
        const keys = data[item];
        return <HeatItem key={`${item}-${index}`} item={item} {...keys} />;
      })}
    </Container>
  );
};

export default Column;
