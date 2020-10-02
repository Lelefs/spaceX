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
