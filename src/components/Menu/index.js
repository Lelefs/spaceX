import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu({ local }) {
  return (
    <Container>
      <nav>
        <Link
          className={local === 'recentes' ? 'ativo' : 'hvr-underline-from-left'}
          to="/"
        >
          Recentes
        </Link>
        <Link
          className={local === 'proximos' ? 'ativo' : 'hvr-underline-from-left'}
          to="/proximos"
        >
          Próximos
        </Link>
        <Link
          className={
            local === 'anteriores' ? 'ativo' : 'hvr-underline-from-left'
          }
          to="/anteriores"
        >
          Anteriores
        </Link>
      </nav>
    </Container>
  );
}
