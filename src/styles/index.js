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
`;

export const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;
