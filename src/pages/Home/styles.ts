import styled from 'styled-components';

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

export const Content = styled.div`
  padding-top: 10rem;
  width: 100%;
  max-width: 65.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;
`;

export const Header = styled.header``;
export const HeaderImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  bottom: 100%;
  transform: translateY(484px);
  left: 0;
`;

export const ListWrapper = styled.div`
  margin: 8rem 0 0;
`;
