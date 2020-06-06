import produce from 'immer';
import { TYPES } from './types';

const INITIAL_STATE = {
  pending: false,
};

export default function criarRestaurante(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.CRIAR_RESTAURANTE_REQUEST:
        draft.pending = true;
        break;
      case TYPES.CRIAR_RESTAURANTE_SUCCESS:
        draft.pending = false;
        break;
      case TYPES.CRIAR_RESTAURANTE_FAILED:
        draft.pending = false;
        break;
      default:
    }
  });
}
