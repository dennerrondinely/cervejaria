import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 2rem 3rem;
  width: 65.2rem;

  display: flex;
  justify-content: space-between;
`;

export const BreweryInfo = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export const BreweryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
  align-items: flex-start;
`;

export const BreweryRating = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

export const RatingValue = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.36px;

  color: #000000;
  margin: 0 0 0.5rem;
`;

export const BreweryName = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.408px;
  color: #000000;
  display: block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  max-width: 240px;
  text-overflow: ellipsis;
`;

export const BreweryType = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: -0.408px;

  color: #000000;
`;
