import styled from 'styled-components';

export const Container = styled.div``;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media (min-width: 545px) {
    justify-content: space-between;
  }
`;

export const ContentContainer = styled.div``;

export const TypeContainer = styled.div`
  display: flex;

  button + button {
    margin-left: 10px;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  border-bottom: 2px solid #c27625;
  margin-bottom: 20px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Message = styled.div`
  background: #f3efc1;
  color: #c27625;
  font-weight: 600;
  padding: 20px 50px;
  border-radius: 5px;
  width: 100%;
`;
