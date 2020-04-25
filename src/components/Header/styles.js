import styled from 'styled-components';

import icosearch from '~/assets/ico-search.jpg';
import iconav from '~/assets/icon-nav.png';

export const Container = styled.div`
  padding: 0 10px;
`;

export const Content = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    max-height: 90px;
    max-width: 250px;
    min-width: 100px;
    flex: 1;
    margin-right: 50px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
  }

  nav ul li a {
    font-size: 16px;
    font-weight: bold;
    color: #00170e;
    padding: 10px;
    margin: 0 2px;
    transition: 0.2s;

    &:hover {
      color: #487f2b;
      border-radius: 16px;
    }
  }

  nav ul li input {
    width: 150px;
    background: transparent;
    border: 1px solid #c2a549;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    font-size: 12px;
    background: url(${icosearch}) no-repeat 120px center;
    background-size: 10%;

    &::placeholder {
      color: #222;
    }
  }

  @media (max-width: 720px) {
    nav {
      display: none;
    }
  }

  > a {
    width: 40px;
    height: 40px;
    background: url(${iconav}) center center no-repeat;
    background-size: cover;
    display: block;
    font-size: ${(props) => `${props.visivel}px`};
  }
`;

export const Profile = styled.div`
  flex: 1;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #00170e;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #00170e;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #00170e;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
