import styled from "styled-components";
import Bg from '../../assets/bg.png'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
`;

export const Container = styled.div`
  flex: 1;
  background: #f9f9f9;
`;

export const ContainerImage = styled.div`
  background-image: url('${Bg}');
  background-size: 150px;
  flex: 1;
`;