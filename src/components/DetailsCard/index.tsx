import * as M from './styles';
import Card from '@mui/material/Card';
import CardHeader from './CardHeader';
import CardInfo from './CardInfo';

const DetailsCard = () => {
  return (
    <M.Wrapper>
      <Card sx={{ width: 653, padding: '3rem' }}>
        <CardHeader />
        <CardInfo />
      </Card>
    </M.Wrapper>
  );
};

export default DetailsCard;
