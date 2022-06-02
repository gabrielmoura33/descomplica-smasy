import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral100};
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%) !important;
  }
`;
