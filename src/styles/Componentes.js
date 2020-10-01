import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonComponent = styled.button`
  cursor: pointer;
  background: #075216;
  height: 55px;
  border-radius: 6px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 15px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#075216')};
  }
`;
