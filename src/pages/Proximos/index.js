import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from '../../services/api';

import Menu from '../../components/Menu';

import { Container, Table } from './styles';

export default function Proximo() {
  const [lancamentos, setLancamentos] = useState([]);

  useEffect(() => {
    async function carregarLancamentos() {
      const proximos = await api.get('/upcoming');
      /* proximos.data.launch_date_local = format(
        new Date(proximos.data.launch_date_local),
        'dd/MM/yyyy',
      ); */
      setLancamentos(proximos.data);
    }

    carregarLancamentos();
  }, []);

  return (
    <>
      <Menu local="proximos" />
      <Container>
        <h1>Próximos lançamentos</h1>
        <Table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Missão</th>
              <th>Foguete</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {lancamentos.map(lancamento => (
              <tr key={lancamento.mission_name}>
                <td>{lancamento.flight_number}</td>
                <td>{lancamento.mission_name}</td>
                <td>{lancamento.rocket.rocket_name}</td>
                <td>
                  {format(new Date(lancamento.launch_date_local), 'dd/MM/yyyy')}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
