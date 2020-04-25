import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

import Perfil from '../pages/Perfil';
import Dashboard from '../pages/Dashboard';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Produto from '../pages/Produto';
import Receitas from '../pages/Receitas';
import Receita from '../pages/Receita';
import Pontos from '../pages/Pontos';
import Ponto from '../pages/Ponto';
import Busca from '../pages/Busca';

import Contato from '../pages/Contato';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" exact component={Produtos} />
      <Route path="/busca" component={Busca} />
      <Route path="/produtos/:id" component={Produto} />
      <Route path="/receitas" exact component={Receitas} />
      <Route path="/receitas/:id" component={Receita} />
      <Route path="/pontos" exact component={Pontos} />
      <Route path="/pontos/:id" component={Ponto} />
      <Route path="/contato" component={Contato} />
      <Route path="/login" component={Login} isLogado />
      <Route path="/cadastro" component={Cadastro} isLogado />
      <Route path="/perfil" component={Perfil} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
