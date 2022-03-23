import { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { validateEmail } from 'utils/validate';
import * as S from './styles';
import Rating from 'components/Rating';

export type RateProps = {
  submitEvaluation?(email: string, avalie: number): void;
  handleClose: () => void;
  name: string;
};

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

const Rate = ({ submitEvaluation, handleClose, name }: RateProps) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [evaluation, setEvaluation] = useState<number | null>(0);

  const clean = () => {
    setEmail('');
    setValidEmail(false);
    setEvaluation(0);
    handleClose();
  };

  const renderBotton = () => {
    return !validEmail || evaluation === 0 ? (
      <S.ButtonDesabled>SALVAR</S.ButtonDesabled>
    ) : (
      <S.Button onClick={handleClick}>SALVAR</S.Button>
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setEmail(currentTarget.value);
    const isValid = validateEmail(currentTarget.value);
    setValidEmail(isValid);
  };

  const handleClick = () => {
    evaluation && submitEvaluation && submitEvaluation(email, evaluation);
  };

  return (
    <Box sx={style}>
      <S.LabelClose onClick={clean}>X</S.LabelClose>
      <S.Title>Avalie a cervejaria {name}</S.Title>
      <Typography
        align="center"
        id="modal-modal-title"
        variant="h1"
        sx={{ ml: 12 }}
        component="h1"
      >
        <Rating value={evaluation ? evaluation : 0} onChange={setEvaluation} />
      </Typography>

      <Typography
        align="center"
        id="modal-modal-description"
        sx={{ mt: 2, pr: 4 }}
      >
        <TextField
          fullWidth={true}
          id="email"
          placeholder="nome@email.com"
          variant="standard"
          onChange={handleChange}
        />
        <S.Label>{validEmail ? '' : 'Favor inserir um e-mail válido'}</S.Label>
        {renderBotton()}
      </Typography>
    </Box>
  );
};

export default Rate;
