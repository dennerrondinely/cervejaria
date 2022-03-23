import * as M from './styles';
import Avatar from 'components/Avatar';
import Rating from 'components/Rating';
import Typography from '@mui/material/Typography';

const CardHeader = () => {
  return (
    <M.CardContainer>
      <M.AvatarContainer>
        <Avatar name="Cervejaria Moreira" />
      </M.AvatarContainer>
      <M.RatingContainer>
        <span>Cervejaria A</span>
        <M.StarsContainer>
          <p>3,9</p>
          <Rating />
        </M.StarsContainer>
        <Typography variant="h5" fontWeight="bold" mb={5}>
          + de 500 avaliações
        </Typography>
      </M.RatingContainer>
    </M.CardContainer>
  );
};

export default CardHeader;
