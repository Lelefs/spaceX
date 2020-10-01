import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  padding: 0 20px;
  height: 60px;
  background-color: #000;
  color: #fff;

  nav {
    height: 100%;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      padding: 0;
      border-bottom: 1px solid transparent;

      &:hover {
        font-weight: bold;
      }

      &.ativo {
        font-weight: bold;
        border-bottom: 1px solid #fff;
      }
    }
  }
`;
