import { all, call, put, takeLeading, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-cycle
import api from '../../../services/api';
import history from '../../../services/history';
import { TYPES } from './types';
import {
  obterTodosRestaurantesFailed,
  obterTodosRestaurantesSuccess,
  obterRestauranteFailed,
  obterRestauranteSuccess,
} from './actions';

export function* obterTodosRestaurantes() {
  try {
    const response = yield call(api.get, 'restaurante');

    const { data } = response;
    history.push('/');
    yield put(obterTodosRestaurantesSuccess(data));
  } catch (error) {
    yield put(obterTodosRestaurantesFailed());
  }
}

export function* obterRestaurante({ payload }) {
  try {
    const response = yield call(api.get, `restaurante/${payload.id}`);

    const { data } = response;
    yield put(obterRestauranteSuccess(data));
  } catch (error) {
    yield put(obterRestauranteFailed());
  }
}

export default all([
  takeLatest(TYPES.OBTER_TODOS_RESTAURANTES_REQUEST, obterTodosRestaurantes),
  takeLatest(TYPES.OBTER_RESTAURANTE_REQUEST, obterRestaurante),
]);
