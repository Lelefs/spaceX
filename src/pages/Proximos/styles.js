import styled from 'styled-components';
import img from '../../assets/background3.jpeg';

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
  background-position: 0px -120px;

  h1 {
    color: #fff;
  }
`;

export const Table = styled.table`
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
