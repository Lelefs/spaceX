import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from '../../services/api';

import Menu from '../../components/Menu';
import Tabela from '../../components/Tabela';
import TabelaLoading from '../../components/TabelaLoading';

import { Container } from './styles';

export default function Proximo() {
  const [lancamentos, setLancamentos] = useState([]);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarLancamentos() {
      setCarregando(true);
      try {
        const anteriores = await api.get('/past');
        anteriores.data
          .sort(function (a, b) {
            return b.date_utc - a.date_utc;
          })
          .reverse();
        setLancamentos(anteriores.data);
        setCarregando(false);
      } catch (err) {
        alert('Não conseguimos encontrar os dados de lançamento');
        setLancamentos('');
        setCarregando(false);
      }
    }

    carregarLancamentos();
  }, []);

  return (
    <>
      <Menu local="anteriores" />
      <Container>
        <h1>Lançamentos anteriores</h1>
        <Tabela>
          {carregando ? (
            <TabelaLoading />
          ) : (
            lancamentos.map(lancamento => (
              <tr key={lancamento.id}>
                <td>{lancamento.flight_number}</td>
                <td>{lancamento.name}</td>
                <td>{format(new Date(lancamento.date_utc), 'dd/MM/yyyy')}</td>
              </tr>
            ))
          )}
        </Tabela>
      </Container>
    </>
  );
}
