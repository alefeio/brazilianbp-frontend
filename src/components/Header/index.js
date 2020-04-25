import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

import icoPerfil from '~/assets/imgPerfil.png';

import { store } from '~/store';

export default function Header() {
  const perfil = useSelector((state) => state.usuario.perfil);
  const { logado } = store.getState().auth;

  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img src={logo} alt="Brazilian Black Pepper" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">INÍCIO</Link>
            </li>
            <li>
              <Link to="/produtos">PRODUTOS</Link>
            </li>
            <li>
              <Link to="/receitas">RECEITAS</Link>
            </li>
            <li>
              <Link to="/pontos">ONDE ENCONTRAR</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
            {/* <li>
              <input type="search" placeholder="Buscar" />
            </li> */}
          </ul>
        </nav>
        {logado && (
          <Profile>
            <div>
              <strong>{perfil && perfil.nome}</strong>
              <Link to="/perfil">Meu perfil</Link>
            </div>
            <img
              src={(perfil && perfil.imagem.url) || icoPerfil}
              alt="Perfil do usuário"
            />
          </Profile>
        )}
      </Content>
    </Container>
  );
}
