import { combineReducers } from 'redux';

import editarRestaurante from './editarRestaurante/reducer';
import criarRestaurante from './criarRestaurante/reducer';
import restaurantes from './restaurantes/reducer';

export default combineReducers({
  criarRestaurante,
  restaurantes,
  editarRestaurante,
});
