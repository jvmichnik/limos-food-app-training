import { TYPES } from './types';

export function editarRestaurante(id, data) {
  return {
    type: TYPES.EDITAR_RESTAURANTE_REQUEST,
    payload: { id, data },
  };
}

export function editarRestauranteSuccess() {
  return {
    type: TYPES.EDITAR_RESTAURANTE_SUCCESS,
  };
}

export function editarRestauranteFailed() {
  return {
    type: TYPES.EDITAR_RESTAURANTE_FAILED,
  };
}
