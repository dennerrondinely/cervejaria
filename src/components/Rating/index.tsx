import { Rating as MUIRating } from '@mui/material';
import * as S from './styles';

export type RatingProps = {
  value?: number;
  size?: 'medium' | 'large';
  readOnly?: boolean;
  onChange?(value: number | null): void;
};

const Rating = ({
  value = 0,
  size = 'medium',
  readOnly,
  onChange
}: RatingProps) => {
  const handleChange = (_: React.SyntheticEvent, value: number | null) => {
    onChange && onChange(value);
  };
  return (
    <S.Wrapper>
      <MUIRating
        name="read-only"
        value={value}
        precision={0.1}
        size={size}
        readOnly={readOnly}
        onChange={handleChange}
      />
    </S.Wrapper>
  );
};

export default Rating;
