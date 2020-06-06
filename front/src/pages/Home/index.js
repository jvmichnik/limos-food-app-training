import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  faPlus,
  faMapMarkedAlt,
  faStream,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as RestauranteAction from '../../store/modules/restaurantes/actions';
import { LinkButton, ActionButton } from '../../components/Buttons';
import Card from '../../components/Card';
import Map from '../../components/Map';
import Loading from '../../components/Card/loading';
import {
  Container,
  LinkContainer,
  TypeContainer,
  ContentContainer,
  Cards,
  Title,
  Message,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const [showMap, setShowMap] = useState(false);
  const restaurantes = useSelector(state => state.restaurantes.dados);
  const pending = useSelector(state => state.restaurantes.pendingAll);

  useEffect(() => {
    dispatch(RestauranteAction.obterTodosRestaurantes());
  }, [dispatch]);

  const renderCards = useMemo(() => {
    if (!pending && restaurantes.length === 0) {
      return <Message>Nenhum restaurante cadastrado</Message>;
    }

    return restaurantes.map(x => (
      <Card to={`/restaurante/${x.id}/editar`} key={x.id} restaurante={x} />
    ));
  }, [pending, restaurantes]);

  const renderMap = useMemo(() => {
    const points =
      restaurantes.length > 0 ? restaurantes.map(x => x.coords) : [];

    return <Map height={450} points={points} />;
  }, [restaurantes]);

  return (
    <Container>
      <LinkContainer>
        <TypeContainer>
          <ActionButton active={!showMap} onClick={() => setShowMap(false)}>
            <FontAwesomeIcon icon={faStream} />
          </ActionButton>
          <ActionButton active={showMap} onClick={() => setShowMap(true)}>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </ActionButton>
        </TypeContainer>
        <LinkButton linkTo="/restaurante/cadastro">
          <FontAwesomeIcon icon={faPlus} />
          Novo Restaurante
        </LinkButton>
      </LinkContainer>
      <Title>
        <h2>Restaurantes</h2>
      </Title>
      <ContentContainer>
        <Cards>
          {pending
            ? [1, 2, 3, 4, 5, 6, 7, 8].map(x => <Loading key={x} />)
            : !showMap
            ? renderCards
            : renderMap}
        </Cards>
      </ContentContainer>
    </Container>
  );
}
