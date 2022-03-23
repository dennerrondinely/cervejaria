import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const RatingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  span {
    font-size: 3rem;
    font-weight: 500;
    font-family: Roboto;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: Roboto;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
