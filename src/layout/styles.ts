import styled from 'styled-components';

export const HeaderImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  bottom: 100%;
  transform: translateY(484px);
  left: 0;
`;

export const Wrapper = styled.div`
  background: #f2f2f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
  height: auto;
  min-height: 100%;
`;
