import { all } from 'redux-saga/effects';

import editarRestaurante from './editarRestaurante/sagas';
import criarRestaurante from './criarRestaurante/sagas';
import restaurantes from './restaurantes/sagas';

export default function* rootSaga() {
  return yield all([criarRestaurante, editarRestaurante, restaurantes]);
}
