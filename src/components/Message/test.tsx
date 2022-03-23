import Message from './index';
import { render, screen } from 'utils/tests/helpers';

describe('<Message />', () => {
  it('should render the Message', () => {
    const { container } = render(<Message text="" />);

    expect(container).toContainHTML('p');
    expect(container).toContainHTML('strong');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should to render message content', () => {
    const message = 'A lista de cervejaria não foi encontrada';
    const { container } = render(<Message text={message} />);

    const textDefault = screen.getByTestId('text-default');
    expect(textDefault).toHaveTextContent(
      'Por favor, verifique sua pesquisa e tente novamente para obter resultados.'
    );

    const textError = screen.getByTestId('text-error');
    expect(textError).toHaveTextContent(message);

    expect(container.firstChild).toMatchSnapshot();
  });
});
