import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from '../../services/api';

import Menu from '../../components/Menu';

import { Container, Table } from './styles';

const lancamento = {
  flight_number: '',
  mission_name: '',
  rocket: { rocket_name: '' },
  launch_date_local: '',
};

export default function Proximo() {
  const [proximoLancamento, setProximoLancamento] = useState(lancamento);

  const [ultimoLancamento, setUltimoLancamento] = useState(lancamento);

  useEffect(() => {
    async function carregarLancamento() {
      const proximo = await api.get('/next');
      proximo.data.launch_date_local = format(
        new Date(proximo.data.launch_date_local),
        'dd/MM/yyyy',
      );
      setProximoLancamento(proximo.data);

      const anterior = await api.get('/latest');
      anterior.data.launch_date_local = format(
        new Date(anterior.data.launch_date_local),
        'dd/MM/yyyy',
      );
      setUltimoLancamento(anterior.data);
    }

    carregarLancamento();
  }, []);

  return (
    <>
      <Menu local="recentes" />
      <Container>
        <h1>Próximo lançamento</h1>
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
            <tr>
              <td>{proximoLancamento.flight_number}</td>
              <td>{proximoLancamento.mission_name}</td>
              <td>{proximoLancamento.rocket.rocket_name}</td>
              <td>{proximoLancamento.launch_date_local}</td>
            </tr>
          </tbody>
        </Table>

        <h1>Último lançamento</h1>
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
            <tr>
              <td>{ultimoLancamento.flight_number}</td>
              <td>{ultimoLancamento.mission_name}</td>
              <td>{ultimoLancamento.rocket.rocket_name}</td>
              <td>{ultimoLancamento.launch_date_local}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
