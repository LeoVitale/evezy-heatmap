import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: relative;
  background-color: ${props => (props.item === 'empty' ? '#fff' : '#ccc')};
  width: 14px;
  height: 14px;
  margin: 3px 1.5px;
  :after {
    ${props => props.item !== 'empty' && props.type && "content: '';"}
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => (props.type === 'failure' ? '#960313' : '#3F7600')};
    opacity: ${props => props.scale && props.scale};
  }
`;
