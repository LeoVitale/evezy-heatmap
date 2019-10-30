import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Container = styled.div`
  padding: 30px;
  display: inline-block;
`;

export const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const ColorScaleContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ScaleLabel = styled.p`
  font-size: 0.8rem;
  margin: 0 5px;
`;

export const HeatMapContainer = styled.div`
  margin-bottom: 30px;
`;
