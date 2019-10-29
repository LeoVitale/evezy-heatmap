import React from 'react';
import { Container } from './styles';

const HeatItem = ({ item, type, scale }) => {
  return <Container item={item} type={type} scale={scale} />;
};

export default HeatItem;
