import styled from 'styled-components';
import { darken } from 'polished';

import trabalhe from '~/assets/trabalhe.png';
import quemsomos from '~/assets/quem-somos.png';

export const Container = styled.div`
  background: #fff;
`;

export const Banner = styled.div`
  width: 100%;
  margin-bottom: 30px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Quemsomos = styled.div`
  background: url(${quemsomos}) right center no-repeat;
  background-size: cover;
  height: 486px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 720px) {
    height: 380px;
    background-position-x: right;
  }
`;

export const Trabalhe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background: url(${trabalhe}) top center;
  background-size: cover;

  @media (max-width: 720px) {
    text-align: center;
    padding: 20px;

    h2 {
      font-size: 15px;
    }
  }

  h2 {
    margin-top: 80px;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
  }

  form {
    margin: 0 auto;
    width: 325px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(255, 255, 255, 0.9);
      border: 0;
      border-radius: 4px;
      height: 30px;
      padding: 0 15px;
      color: #111;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    textarea {
      background: rgba(255, 255, 255, 0.9);
      border: 0;
      border-radius: 4px;
      height: 100px;
      padding: 10px 15px;
      color: #111;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ddc063;
      font-weight: bold;
      color: #111;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#ddc063')};
      }
    }

    a {
      color: #4c4738;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
