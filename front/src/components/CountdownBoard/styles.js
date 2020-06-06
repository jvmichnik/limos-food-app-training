import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 20px;

  & > span {
    padding: 8px 20px;
    background: #fff;
    font-size: 1.8rem;
    border-radius: 10px;
    font-weight: 700;
    box-shadow: 0px 2px 3px 0px #00000063;
  }
`;

export const Label = styled.div`
  position: absolute;
  margin-left: -80px;
  margin-top: -14px;
  font-size: 1rem;
  transform: rotate(-15deg);
  color: red;
  font-weight: 600;
  border: 2px solid red;
  padding: 3px 10px;
  border-radius: 5px;
`;
