import React from 'react';
import Shimmer from 'react-shimmer-effect';

import { Container } from './styles';

export default function TabelaLoading() {
  return (
    <Container>
      <td>
        <Shimmer>
          <div />
        </Shimmer>
      </td>
      <td>
        <Shimmer>
          <div />
        </Shimmer>
      </td>
      <td>
        <Shimmer>
          <div />
        </Shimmer>
      </td>
    </Container>
  );
}
