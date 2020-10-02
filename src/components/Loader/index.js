import React from 'react';

import { Container } from './styles';

import loaderGif from '../../assets/loader.gif';

export default function Loader() {
  return (
    <Container>
      <img src={loaderGif} alt="Carregando..." />
    </Container>
  );
}
