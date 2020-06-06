import produce from 'immer';
import { TYPES } from './types';

const INITIAL_STATE = {
  pendingAll: false,
  dados: [],
  pending: false,
  restaurante: null,
};

export default function restaurantes(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.OBTER_TODOS_RESTAURANTES_REQUEST:
        draft.pendingAll = true;
        break;
      case TYPES.OBTER_TODOS_RESTAURANTES_SUCCESS:
        draft.pendingAll = false;
        draft.dados = action.payload.data;
        break;
      case TYPES.OBTER_TODOS_RESTAURANTES_FAILED:
        draft.pendingAll = false;
        break;

      case TYPES.OBTER_RESTAURANTE_REQUEST:
        draft.pending = true;
        break;
      case TYPES.OBTER_RESTAURANTE_SUCCESS:
        draft.pending = false;
        draft.restaurante = action.payload.data;
        break;
      case TYPES.OBTER_RESTAURANTE_FAILED:
        draft.pending = false;
        break;
      default:
    }
  });
}
