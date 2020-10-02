import styled from 'styled-components';
import img from '../../assets/background.jpeg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #c6c6c6;
  align-items: center;
  padding: 20px;
  background-image: url(${img});
  background-size: cover;
`;

export const Table = styled.table`
  margin-bottom: 40px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  border-collapse: separate;
  border-radius: 5px;
  border-spacing: 0;
  border: 1px solid #000;

  thead {
    background: #909090;
  }

  tbody tr {
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
