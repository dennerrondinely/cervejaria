import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 0.8rem 1.8rem;
  ${({ theme }) => css`
    background-color: ${theme['white']};
  `}
`;

export const Label = styled.h2`
  font-style: italic;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.3rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.36px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: 0.36px;
  border: none;
  color: rgba(0, 0, 0, 0.3);

  &:focus-within {
    border: none;
    outline: 0;
  }
`;
