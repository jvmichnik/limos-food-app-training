import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;

  label{
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  input{
    border: 1px solid #bfbfbf;
    padding: 10px 20px;
    border-radius: 5px;
  }
`;
