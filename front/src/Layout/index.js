import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Background from './Background';
import CountdownBoard from '../components/CountdownBoard';
import { Wrapper, HeaderContainer, Container, MainContainer } from './styles';

import Logo from '../assets/logo.png';

export default function HomeLayout({ children }) {
  return (
    <Wrapper>
      <Background />
      <Container>
        <HeaderContainer>
          <img src={Logo} alt="Logo escrito limos" />
          <CountdownBoard />
        </HeaderContainer>
        <MainContainer>{children}</MainContainer>
      </Container>
    </Wrapper>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
