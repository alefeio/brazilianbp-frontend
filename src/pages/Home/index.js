import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '~/services/api';

import banner from '~/assets/banner.jpg';
import quemsomos from '~/assets/quem-somos.png';

import { Banner, Quemsomos, Trabalhe, Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório!'),
  email: Yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
  telefone: Yup.string().required('Campo obrigatório!'),
  mensagem: Yup.string().required('Campo obrigatório!'),
});

export default function Home() {
  async function handleSubmit({ nome, email, telefone, mensagem }) {
    try {
      await api.post('trabalhe', {
        nome,
        email,
        telefone,
        mensagem,
      });

      toast.success(
        'Obrigado! Sua mensagem foi enviada com sucesso. Em breve retornaremos.'
      );
    } catch (error) {
      toast.error('Erro ao enviar sua mensagem. Tente novamente!');
    }
  }

  return (
    <Container>
      <Banner>
        <img src={banner} alt="Sua vida mais apimentada" />
      </Banner>
      <Quemsomos>
        <img
          src={quemsomos}
          alt="Brazilian Black Pepper - O sabor que faltava na sua vida."
        />
      </Quemsomos>
      <Trabalhe>
        <h2>Trabalhe com a gente!</h2>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="nome" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="telefone" placeholder="Telefone" />
          <Textarea name="mensagem" placeholder="Sua mensagem" />

          <button type="submit">Enviar</button>
        </Form>
      </Trabalhe>
    </Container>
  );
}
