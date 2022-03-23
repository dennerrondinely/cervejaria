import * as S from './styles';

export type AvatarProps = {
  name?: string;
};

const Avatar = ({ name }: AvatarProps) => {
  const splitName = name ? name.split('') : ['-'];
  const [letter] = splitName.filter((l) => isNaN(Number(l)));
  return (
    <S.Wrapper>
      <S.Letter>{letter}</S.Letter>
    </S.Wrapper>
  );
};

export default Avatar;
