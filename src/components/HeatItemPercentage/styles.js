import styled from 'styled-components';

const getColor = scale => {
  if (scale > 0 && scale <= 25) {
    return 0.25;
  } else if (scale > 25 && scale < 50) {
    return 0.5;
  } else if (scale > 50 && scale <= 75) {
    return 0.75;
  } else if (scale > 75 && scale <= 100) {
    return 1;
  }
  return 0;
};

export const Container = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.item === 'empty' ? '#fff' : '#e4e4e4',
  },
}))`
  display: block;
  position: relative;
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
    opacity: ${({ scale }) => scale && getColor(scale)};
  }
`;
