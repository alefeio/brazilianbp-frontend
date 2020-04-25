import React from 'react';
import { Link } from 'react-router-dom';

import icotel from '~/assets/ico-telefone.jpg';
import icoemail from '~/assets/ico-email.jpg';
import icolocal from '~/assets/ico-local.jpg';
import icohorario from '~/assets/ico-horario.jpg';
import icoinsta from '~/assets/ico-insta.jpg';
import icoface from '~/assets/ico-face.jpg';

import { store } from '~/store';

import { Rod } from './styles';

export default function Rodape() {
  const { logado } = store.getState().auth;

  return (
    <Rod>
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
        {!logado && (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
      <ul>
        <li>CONTATO</li>
        <li>
          <img src={icotel} alt="" /> +55 00 00000-0000
        </li>
        <li>
          <img src={icoemail} alt="" /> oi@brazilianbp.com.br
        </li>
        <li>
          <img src={icolocal} alt="" /> Av. Tal, 1234
        </li>
        <li>
          <img src={icohorario} alt="" /> Segunda à Sexta, de 08h às 18h
        </li>
      </ul>
      <ul>
        <li>
          <h2>Acompanhe nossas redes sociais</h2>
        </li>
        <li>
          <img src={icoinsta} alt="Instagram" />
          <img src={icoface} alt="Facebook" />
        </li>
      </ul>
    </Rod>
  );
}
