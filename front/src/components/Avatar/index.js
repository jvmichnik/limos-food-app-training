import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Avatar({ urlImage, size }) {
  return (
    <Container size={size}>
      {urlImage ? <img src={urlImage} /> : <div />}
    </Container>
  );
}

Avatar.propTypes = {
  urlImage: PropTypes.string.isRequired,
  size: PropTypes.number
};

Avatar.defaultProps = {
  size: 155
}