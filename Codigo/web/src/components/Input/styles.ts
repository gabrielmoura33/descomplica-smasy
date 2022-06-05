import styled, { css } from 'styled-components';

interface InputContainerProps {
  isInvalid?: boolean;
}
export const Container = styled.input<InputContainerProps>`
  width: 100%;
  height: 60px;
  color: #999;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 8px !important;
  padding: 0 24px;
  margin-top: 4px;

  ${(props) =>
    props.isInvalid &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.invalid};
    `}
`;

export const FormErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.invalid};
  margin: 4px 0;
`;
