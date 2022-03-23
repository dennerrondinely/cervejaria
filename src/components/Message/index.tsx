import { Box, Container, Typography } from '@mui/material';

export type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return (
    <Container fixed>
      <Box
        fontSize={18}
        sx={{
          width: 500,
          height: 300
        }}
      >
        <Typography
          data-testid="text-error"
          marginBottom={5}
          align="center"
          fontSize={18}
        >
          <strong>{text}</strong>
        </Typography>
        <Typography fontSize={18} align="center" data-testid="text-default">
          Por favor, verifique sua pesquisa e tente novamente para obter
          resultados.
        </Typography>
      </Box>
    </Container>
  );
};

export default Message;
