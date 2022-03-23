import { ReactNode } from 'react';

import Header from 'components/Header';
import backgroundImg from 'assets/background.svg';

import * as S from './styles';

export type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <S.Wrapper>
      <S.HeaderImage src={backgroundImg} />
      <Header />
      {children}
    </S.Wrapper>
  );
};

export default Container;
