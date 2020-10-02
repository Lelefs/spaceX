import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from '../../services/api';

import Menu from '../../components/Menu';
import Tabela from '../../components/Tabela';
import Loader from '../../components/Loader';

import { Container } from './styles';

const lancamento = {
  flight_number: '',
  mission_name: '',
  rocket: { rocket_name: '' },
  launch_date_utc: '',
};

export default function Proximo() {
  const [proximoLancamento, setProximoLancamento] = useState(lancamento);

  const [ultimoLancamento, setUltimoLancamento] = useState(lancamento);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarLancamento() {
      setCarregando(true);
      const proximo = await api.get('/next');
      proximo.data.launch_date_utc = format(
        new Date(proximo.data.launch_date_utc),
        'dd/MM/yyyy',
      );
      setProximoLancamento(proximo.data);

      const anterior = await api.get('/latest');
      anterior.data.launch_date_utc = format(
        new Date(anterior.data.launch_date_utc),
        'dd/MM/yyyy',
      );
      setUltimoLancamento(anterior.data);
      setCarregando(false);
    }

    carregarLancamento();
  }, []);

  return (
    <>
      <Menu local="recentes" />
      {carregando && <Loader />}
      <Container>
        <h1>Próximo lançamento</h1>
        <Tabela>
          <tr>
            <td>{proximoLancamento.flight_number}</td>
            <td>{proximoLancamento.mission_name}</td>
            <td>{proximoLancamento.rocket.rocket_name}</td>
            <td>{proximoLancamento.launch_date_utc}</td>
          </tr>
        </Tabela>

        <h1>Último lançamento</h1>
        <Tabela>
          <tr>
            <td>{ultimoLancamento.flight_number}</td>
            <td>{ultimoLancamento.mission_name}</td>
            <td>{ultimoLancamento.rocket.rocket_name}</td>
            <td>{ultimoLancamento.launch_date_utc}</td>
          </tr>
        </Tabela>
      </Container>
    </>
  );
}
