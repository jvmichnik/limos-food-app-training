import { all, call, put, takeLeading, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-cycle
import api from '../../../services/api';
import history from '../../../services/history';
import { TYPES } from './types';
import { criarRestauranteSuccess, criarRestauranteFailed } from './actions';

export function* criarRestaurante({ payload }) {
  try {
    yield call(api.post, 'restaurante', payload.data);

    toast.success('Restaurante criado.');
    history.push('/');
    yield put(criarRestauranteSuccess());
  } catch (error) {
    yield put(criarRestauranteFailed());
  }
}

export default all([
  takeLeading(TYPES.CRIAR_RESTAURANTE_REQUEST, criarRestaurante),
]);
