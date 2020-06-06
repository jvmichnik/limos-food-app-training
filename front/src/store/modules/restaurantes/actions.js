import { TYPES } from './types';

export function obterTodosRestaurantes() {
  return {
    type: TYPES.OBTER_TODOS_RESTAURANTES_REQUEST,
  };
}

export function obterTodosRestaurantesSuccess(data) {
  return {
    type: TYPES.OBTER_TODOS_RESTAURANTES_SUCCESS,
    payload: { data },
  };
}

export function obterTodosRestaurantesFailed() {
  return {
    type: TYPES.OBTER_TODOS_RESTAURANTES_FAILED,
  };
}

export function obterRestaurante(id) {
  return {
    type: TYPES.OBTER_RESTAURANTE_REQUEST,
    payload: { id },
  };
}

export function obterRestauranteSuccess(data) {
  return {
    type: TYPES.OBTER_RESTAURANTE_SUCCESS,
    payload: { data },
  };
}

export function obterRestauranteFailed() {
  return {
    type: TYPES.OBTER_RESTAURANTE_FAILED,
  };
}
