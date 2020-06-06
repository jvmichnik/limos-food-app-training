import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100%;
  img,
  div {
    height: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
  }
  div {
    background: #e2e2e2;
  }
`;