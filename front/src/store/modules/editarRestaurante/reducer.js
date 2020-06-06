import produce from 'immer';
import { TYPES } from './types';

const INITIAL_STATE = {
  pending: false,
};

export default function editarRestaurante(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.EDITAR_RESTAURANTE_REQUEST:
        draft.pending = true;
        break;
      case TYPES.EDITAR_RESTAURANTE_SUCCESS:
        draft.pending = false;
        break;
      case TYPES.EDITAR_RESTAURANTE_FAILED:
        draft.pending = false;
        break;
      default:
        break;
    }
  });
}
