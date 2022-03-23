import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Icon from 'components/Icon';
import * as S from './styles';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pl: 4,
  pb: 4
};

export type RateErrorProps = {
  handleClose;
};

const RateError = ({ handleClose }: RateErrorProps) => {
  return (
    <Box>
      <Box sx={style}>
        <S.LabelClose onClick={handleClose}>X</S.LabelClose>
        <S.Label>Algo deu errado!</S.Label>
        <Typography
          align="center"
          id="modal-modal-title"
          variant="h1"
          sx={{ pr: 4 }}
          component="h1"
        >
          <Icon icon="error" size={200} />
        </Typography>
        <S.LabelError>
          Não foi possivel adicionar sua avaliação. Tente mais tarde.
        </S.LabelError>
      </Box>
    </Box>
  );
};

export default RateError;
