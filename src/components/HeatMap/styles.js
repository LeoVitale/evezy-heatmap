import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
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
  margin-right: 10px;
`;

export const LabelY = styled.div`
  display: flex;
  width: auto;
  height: 14px;
  margin: 3px 1.5px;
  color: #666;
  align-items: center;
  align-content: center;
  text-align: right;
  span {
    width: 100%;
  }
`;

export const LabelX = styled.div`
  height: 14px;
  width: 14px;
  margin: 1.5px;
  color: #666;
`;
