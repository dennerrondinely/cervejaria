import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.svg';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={logoImg} alt="Beer Logo" height="46.88px" />
      </Link>
    </S.Wrapper>
  );
};

export default Header;
