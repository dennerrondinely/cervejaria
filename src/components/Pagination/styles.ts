import styled, { css } from 'styled-components';

type ButtonProps = {
  selected?: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 30rem;
  justify-content: space-between;
`;

export const PagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Page = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.36px;

  color: #000000;

  ${({ selected }: ButtonProps) => css`
    font-weight: ${selected ? 700 : 400};
  `}
`;

export const Navigation = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`;
