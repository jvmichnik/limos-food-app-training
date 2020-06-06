import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as EditarRestauranteActions from '../../../store/modules/editarRestaurante/actions';
import * as RestauranteActions from '../../../store/modules/restaurantes/actions';
import { LinkButton } from '../../../components/Buttons';
import { Container, LinkContainer } from './styles';
import FormBase from '../FormBase';

export default function Cadastro() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const loadingGet = useSelector(state => state.restaurantes.pending);
  const restaurante = useSelector(state => state.restaurantes.restaurante);

  useEffect(() => {
    if (id) {
      dispatch(RestauranteActions.obterRestaurante(id));
    }
  }, [dispatch, id]);

  return (
    <Container>
      <LinkContainer>
        <LinkButton linkTo="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Voltar
        </LinkButton>
      </LinkContainer>
      <h2>Editar restaurante</h2>
      <FormBase
        restaurante={restaurante}
        onFormSubmit={data =>
          dispatch(
            EditarRestauranteActions.editarRestaurante(restaurante.id, data)
          )
        }
        buttonLabel="Salvar"
        loading={loadingGet}
      />
    </Container>
  );
}
