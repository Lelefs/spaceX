import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from '../../services/api';

import Menu from '../../components/Menu';
import Tabela from '../../components/Tabela';
import TabelaLoading from '../../components/TabelaLoading';

import { Container } from './styles';

const lancamento = {
  flight_number: '',
  name: '',
  date_utc: '',
};

export default function Proximo() {
  const [proximoLancamento, setProximoLancamento] = useState(lancamento);

  const [ultimoLancamento, setUltimoLancamento] = useState(lancamento);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarLancamento() {
      setCarregando(true);
      try {
        const proximo = await api.get('/next');
        proximo.data.date_utc = format(
          new Date(proximo.data.date_utc),
          'dd/MM/yyyy',
        );

        setProximoLancamento(proximo.data);

        const anterior = await api.get('/latest');
        anterior.data.date_utc = format(
          new Date(anterior.data.date_utc),
          'dd/MM/yyyy',
        );

        setUltimoLancamento(anterior.data);
        setCarregando(false);
      } catch (err) {
        alert('Não conseguimos encontrar os dados de lançamento');
        setProximoLancamento('');
        setUltimoLancamento('');
        setCarregando(false);
      }
    }

    carregarLancamento();
  }, []);

  return (
    <>
      <Menu local="recentes" />
      <Container>
        <h1>Próximo lançamento</h1>
        <Tabela>
          {carregando ? (
            <TabelaLoading />
          ) : (
            <tr>
              <td>{proximoLancamento.flight_number}</td>
              <td>{proximoLancamento.name}</td>
              <td>{proximoLancamento.date_utc}</td>
            </tr>
          )}
        </Tabela>

        <h1>Último lançamento</h1>
        <Tabela>
          {carregando ? (
            <TabelaLoading />
          ) : (
            <tr>
              <td>{ultimoLancamento.flight_number}</td>
              <td>{ultimoLancamento.name}</td>
              <td>{ultimoLancamento.date_utc}</td>
            </tr>
          )}
        </Tabela>
      </Container>
    </>
  );
}
