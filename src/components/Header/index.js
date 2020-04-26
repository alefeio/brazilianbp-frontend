import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import iconav from '~/assets/icon-nav2.png';
import iconavx from '~/assets/icon-nav_x2.png';

import { Container, Content, Profile, Img, Nav } from './styles';

import icoPerfil from '~/assets/imgPerfil.png';

import { store } from '~/store';

export default function Header() {
  const [checked, setChecked] = useState(false);

  const perfil = useSelector((state) => state.usuario.perfil);
  const { logado } = store.getState().auth;

  function altChecked() {
    setChecked(!checked);
  }

  const Toggle = () => {
    return (
      <Img src={checked ? iconavx : iconav} alt="Menu" onClick={altChecked} />
    );
  };

  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img src={logo} alt="Brazilian Black Pepper" />
          </Link>
        </div>
        <Toggle />
        <Nav exibir={checked}>
          <ul>
            <li>
              <Link to="/" onClick={altChecked}>
                INÍCIO
              </Link>
            </li>
            <li>
              <Link to="/produtos" onClick={altChecked}>
                PRODUTOS
              </Link>
            </li>
            <li>
              <Link to="/receitas" onClick={altChecked}>
                RECEITAS
              </Link>
            </li>
            <li>
              <Link to="/pontos" onClick={altChecked}>
                ONDE ENCONTRAR
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={altChecked}>
                CONTATO
              </Link>
            </li>
            {/* <li>
              <input type="search" placeholder="Buscar" />
            </li> */}
          </ul>
        </Nav>
        {logado && (
          <Profile>
            <div>
              <strong>{perfil && perfil.nome}</strong>
              <Link to="/perfil">Meu perfil</Link>
            </div>
            <img src={perfil.imagem.url || icoPerfil} alt="Perfil do usuário" />
          </Profile>
        )}
      </Content>
    </Container>
  );
}
