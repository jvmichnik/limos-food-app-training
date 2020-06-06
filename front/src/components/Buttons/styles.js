import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButtonContainer = styled(Link)`
  padding: 10px 20px;
  color: black;
  border-radius: 10px;
  font-size: 17px;

  &:hover {
    background: #f7f7f7;
  }

  svg {
    margin-right: 7px;
  }
`;

export const PrimaryButtonContainer = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  background: #e9da34;
  font-size: 17px;
  font-weight: 600;
  color: #a96217;

  &:hover {
    background: #d4c62d;
  }
`;

export const ActionButtonContainer = styled.button`
  padding: 10px 20px;
  color: #864c0e;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  font-size: 17px;
  ${props => props.active && 'border: 1px solid #864c0e;'}

  &:hover {
    background: #f7f7f7;
  }
`;
