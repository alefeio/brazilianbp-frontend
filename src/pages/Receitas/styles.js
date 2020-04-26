import styled from 'styled-components';
import { darken } from 'polished';

import bannerReceitas from '~/assets/banner-receitas.jpg';

export const Container = styled.div`
  background: #fff;
`;

export const Banner = styled.div`
  height: 271px;
  display: block;
  background: url(${bannerReceitas}) no-repeat center center;
  background-size: cover;
`;

export const Barra = styled.div`
  height: 70px;
  display: block;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  padding: 0 80px;

  ul {
    display: flex;
  }

  ul li a {
    margin: 5px;
    padding: 10px;
    color: #4d4d4d;
  }
`;

export const ListaReceitas = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 50px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    overflow: hidden;

    img {
      align-self: center;
      width: 250px;
      height: 150px;
      transition: 1s;

      &:hover {
        width: 350px;
        height: 250px;
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    a {
      background: #644d25;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }

      &:hover {
        background: ${darken(0.07, '#644d25')};
      }
    }
  }
`;
