import styled from 'styled-components';
import backgroundImg from '../../assets/background_red.png';

export const Wrapper = styled.div`
  background-image: url('${backgroundImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  padding-top: 10rem;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
