import styled from 'styled-components';
import { Link } from 'react-router-dom';
import devices from '../../styles/device';

export const Container = styled(Link)`
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-radius: 10px;
  align-items: center;
  flex: 100%;
  max-width: 100%;
  color: black;

  @media (min-width: 545px) {
    flex: 50%;
    max-width: 50%;
  }
  @media ${devices.tablet} {
    flex: 33.33%;
    max-width: 33.33%;
  }
  @media ${devices.laptop} {
    flex: 25%;
    max-width: 25%;
  }

  & > div {
    margin-bottom: 10px;
  }

  &:hover {
    background: #fbfbfb;
    cursor: pointer;
  }
`;
