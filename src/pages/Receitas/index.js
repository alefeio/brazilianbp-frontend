import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';

import { Container, Barra, ListaReceitas, Banner } from './styles';

export default function Receitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get('receitas');

      console.tron.log(`Receitas ${response.data}`);

      setReceitas(response.data);
    }

    loadProdutos();
  }, []);

  return (
    <Container>
      <Banner />
      <Barra>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/receitas">Receitas</Link>
          </li>
        </ul>
      </Barra>
      <ListaReceitas>
        {receitas.map((r) => (
          <li key={r.id}>
            <img src={r.imagem.url} alt="Receitas" />
            <strong>{r.titulo}</strong>
            <Link to={`receitas/${r.id}`}>
              <div>
                <MdAdd size={16} color="#FFF" />
              </div>
              <span>Informações</span>
            </Link>
          </li>
        ))}
      </ListaReceitas>
    </Container>
  );
}
