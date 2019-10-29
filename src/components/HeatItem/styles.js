import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => (props.item === 'empty' ? '#fff' : '#ccc')};
  width: 14px;
  height: 14px;
  margin: 3px 1.5px;
`;
