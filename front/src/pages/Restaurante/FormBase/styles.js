import styled from 'styled-components';
import devices from '../../../styles/device';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > div {
    padding: 0px 10px;
  }

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  flex: 1;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 20px 0px;

  a {
    margin-left: 10px;
  }
`;
