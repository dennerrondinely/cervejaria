import logoImg from '../../../assets/logo.svg';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <img src={logoImg} alt="Beer Logo" height="46.88px" />
    </S.Wrapper>
  );
};

export default Header;
