import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu({ local }) {
  return (
    <Container>
      <nav>
        <Link className={local === 'recentes' ? 'ativo' : undefined} to="/">
          Recentes
        </Link>
        <Link
          className={local === 'proximos' ? 'ativo' : undefined}
          to="/proximos"
        >
          Próximos
        </Link>
        <Link
          className={local === 'anteriores' ? 'ativo' : undefined}
          to="/anteriores"
        >
          Anteriores
        </Link>
      </nav>
    </Container>
  );
}
