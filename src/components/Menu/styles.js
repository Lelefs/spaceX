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
      position: relative;

      &.ativo {
        font-weight: bold;
        border-bottom: 1px solid #fff;
      }
    }

    .hvr-underline-from-left:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #fff;
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1),
        -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .hvr-underline-from-left:hover:after {
      transition-duration: 0.4s;
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
`;
