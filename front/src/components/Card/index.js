import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { Container } from './styles';

export default function Card({ to, restaurante }) {
  return (
    <Container to={to}>
      <Avatar size={120} urlImage={restaurante.linkImagem} />
      <span>{restaurante.nome}</span>
    </Container>
  );
}

Card.propTypes = {
  restaurante: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    linkImagem: PropTypes.string.isRequired,
  }).isRequired,
};
