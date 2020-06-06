import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cadastro from '../pages/Restaurante/Cadastro';
import Editar from '../pages/Restaurante/Editar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurante/:id/editar" component={Editar} />
      <Route path="/restaurante/cadastro" component={Cadastro} />
    </Switch>
  );
}
