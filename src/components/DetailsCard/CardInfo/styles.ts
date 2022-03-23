import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  &.underline {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    color: #000;
    font-weight: bold;
    margin-left: 1rem;
  }
  &.flex-start {
    justify-content: flex-start;
  }
  button {
    background: #ffcc00;
    border: none;
    height: 48px;
    width: 362px;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
  }
  &.center {
    justify-content: center;
  }
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 3rem;
`;

export const Text = styled.span`
  font-weight: 300;
  font-size: 3rem;
  padding-left: 2rem;
  text-align: right;
`;
