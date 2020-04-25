import styled from 'styled-components';

export const Rod = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  padding: 20px 30px;

  ul {
    max-width: 250px;
  }

  ul:first-child {
    border-left: 5px solid #487f2b;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  ul li a {
    color: #000;
    font-size: 16px;
    text-transform: uppercase;
    padding: 5px;
  }

  ul li img {
    margin: 4px 8px 0 0;
  }

  ul li h2 {
    font-size: 22px;
    text-transform: uppercase;
  }
`;
