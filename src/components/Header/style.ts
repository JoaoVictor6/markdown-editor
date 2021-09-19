import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 16px;
  img {
    height: 42px;
  }
`;

export const Menu = styled.button`
  background: transparent;
  border-style: none;
  cursor: pointer;
  display: flex;
  gap: 16px;
  font-size: 28.43px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif
`;
