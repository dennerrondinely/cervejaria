import Avatar from 'components/Avatar';
import Rating from 'components/Rating';

import { Brewery } from 'types/brewery';

import * as S from './styles';

export type ListCardProps = {
  brewery: Brewery;
};

const ListCard = ({ brewery }: ListCardProps) => {
  const { name, breweryType, rateAverage } = brewery;
  return (
    <S.Wrapper>
      <S.BreweryInfo>
        <Avatar name={name} />
        <S.BreweryText>
          <S.BreweryName title={name}>{name}</S.BreweryName>
          <S.BreweryType>{breweryType}</S.BreweryType>
        </S.BreweryText>
      </S.BreweryInfo>
      <S.BreweryRating>
        <S.RatingValue>{rateAverage}</S.RatingValue>
        <Rating value={rateAverage} readOnly />
      </S.BreweryRating>
    </S.Wrapper>
  );
};

export default ListCard;
