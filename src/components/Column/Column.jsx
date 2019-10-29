import React from 'react';
import HeatItem from 'components/HeatItem';
import { Container } from './styles';

const Column = ({ items = [], data, renderItem }) => {
  const RenderItem = renderItem;

  return (
    <Container>
      {items.map((item, index) => {
        const props = {
          key: `${item}-${index}`,
          item,
          ...data[item],
        };

        return renderItem ? <RenderItem {...props} /> : <HeatItem {...props} />;
      })}
    </Container>
  );
};

export default Column;
