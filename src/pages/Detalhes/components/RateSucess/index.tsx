import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Icon from 'components/Icon';
import * as S from './styles';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pl: 4,
  pb: 4
};

export type RateSucessProps = {
  handleClose;
};

const RateSucess = ({ handleClose }: RateSucessProps) => {
  return (
    <Box>
      <Box sx={style}>
        <S.LabelClose onClick={handleClose}>X</S.LabelClose>
        <S.Label>Um brinde!</S.Label>
        <Typography
          align="center"
          id="modal-modal-title"
          variant="h1"
          sx={{ pr: 4 }}
          component="h1"
        >
          <Icon icon="success" size={200} />
        </Typography>
        <S.LabelSucess>Sua avaliação foi adicionada com sucesso!</S.LabelSucess>
      </Box>
    </Box>
  );
};

export default RateSucess;
