import React from 'react';

import { Container } from './styles';
import Loading from '../Loading';

export default function CardLoading() {
  return (
    <Container>
      <Loading style={{ width: 120, height: 120 }} />
      <Loading style={{ width: 50 }} />
    </Container>
  );
}
