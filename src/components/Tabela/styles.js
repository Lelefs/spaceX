import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  max-width: 600px;
  text-align: center;
  border-collapse: separate;
  border-radius: 5px;
  border-spacing: 0;
  border: 1px solid #000;

  thead,
  tbody tr:nth-child(even) {
    background: #909090;
  }

  tbody tr:nth-child(odd) {
    background: #c6c6c6;
  }

  th,
  td {
    padding: 10px;
  }

  td {
    border-top: 1px solid #000;
  }
`;
