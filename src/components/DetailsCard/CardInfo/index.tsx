import * as M from './styles';
import mapLogo from '../../../assets/map_logo.png';

const CardInfo = () => {
  return (
    <M.CardContainer>
      <M.Row className="underline">
        <M.Title>Tipo</M.Title>
        <M.Text>Bar</M.Text>
      </M.Row>
      <M.Row className="underline">
        <M.Title>Site</M.Title>
        <M.Text>www.barC.com.br</M.Text>
      </M.Row>
      <M.Row className="underline">
        <M.Title>Endereço</M.Title>
        <M.Text>618 Fifth Ave, San Diego,CA 92101, Estados Unidos</M.Text>
      </M.Row>
      <M.Row className="flex-start">
        <img src={mapLogo} alt="Ver no mapa" />
        <a href="#">Ver no mapa</a>
      </M.Row>
      <M.Row className="center">
        <button>AVALIAR CERVEJARIA</button>
      </M.Row>
    </M.CardContainer>
  );
};

export default CardInfo;
