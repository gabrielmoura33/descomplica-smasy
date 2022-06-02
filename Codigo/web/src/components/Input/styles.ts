import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 60px;
  color: #999;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 8px !important;
  padding: 0 24px;
  margin-top: 4px;
`;
