import React from 'react';

import { Container } from './styles';

export default function Tabela({ children }) {
  return (
    <Container>
      <thead>
        <tr>
          <th>N°</th>
          <th>Missão</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Container>
  );
}
