import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 65.2rem;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: 0.36px;

  color: #000000;
`;
export const Subtitle = styled.small`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.36px;

  color: #595959;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  list-style: none;
`;

export const PaginationWrapper = styled.div``;

export const ListItem = styled.li`
  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
