import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as CriarRestauranteActions from '../../../store/modules/criarRestaurante/actions';
import { LinkButton } from '../../../components/Buttons';
import FormBase from '../FormBase';

import { Container, LinkContainer } from './styles';

export default function Cadastro() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.criarRestaurante.pending);

  return (
    <Container>
      <LinkContainer>
        <LinkButton linkTo="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Voltar
        </LinkButton>
      </LinkContainer>
      <h2>Novo restaurante</h2>
      <FormBase
        onFormSubmit={data =>
          dispatch(CriarRestauranteActions.criarRestaurante(data))
        }
        loading={loading}
        buttonLabel="Cadastrar"
      />
    </Container>
  );
}
