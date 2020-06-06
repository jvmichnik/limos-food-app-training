import { TYPES } from './types';

export function criarRestaurante(data) {
  return {
    type: TYPES.CRIAR_RESTAURANTE_REQUEST,
    payload: { data },
  };
}

export function criarRestauranteSuccess() {
  return {
    type: TYPES.CRIAR_RESTAURANTE_SUCCESS,
  };
}

export function criarRestauranteFailed() {
  return {
    type: TYPES.CRIAR_RESTAURANTE_FAILED,
  };
}
