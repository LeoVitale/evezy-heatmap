import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
`;

export const ColumnContainer = styled.div`
  display: flex;
  grid-column: 2;
`;

export const LabelXContainer = styled.div`
  display: flex;
  grid-column: 2;
`;

export const LabelYContainer = styled.div`
  grid-column: 1;
`;

export const LabelY = styled.div`
  width: 14px;
  height: 14px;
  margin: 1.5px;
`;
