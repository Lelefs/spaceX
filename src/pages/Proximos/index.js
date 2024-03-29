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
        const proximos = await api.get('/upcoming');
        proximos.data
          .sort(function (a, b) {
            return b.date_utc - a.date_utc;
          })
          .reverse();
        setLancamentos(proximos.data);
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
      <Menu local="proximos" />
      <Container>
        <h1>Próximos lançamentos</h1>
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
