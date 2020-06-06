import { all, call, put, takeLeading, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-cycle
import api from '../../../services/api';
import history from '../../../services/history';
import { TYPES } from './types';
import { editarRestauranteSuccess, editarRestauranteFailed } from './actions';

export function* editarRestaurante({ payload }) {
  try {
    yield call(api.put, `restaurante/${payload.id}`, payload.data);

    toast.success('Restaurante salvo.');
    history.push('/');
    yield put(editarRestauranteSuccess());
  } catch (error) {
    yield put(editarRestauranteFailed());
  }
}

export default all([
  takeLeading(TYPES.EDITAR_RESTAURANTE_REQUEST, editarRestaurante),
]);
