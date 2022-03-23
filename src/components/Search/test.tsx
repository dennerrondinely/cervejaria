import Search from './index';
import { fireEvent, render, screen, waitFor } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

describe('<Search />', () => {
  it('should render the Search', () => {
    const { container } = render(<Search />);

    expect(container).toContainHTML('input');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change value when typing', async () => {
    const onSearch = jest.fn();

    render(<Search onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });

  it('should show value when click', async () => {
    const onSearch = jest.fn();

    render(<Search onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onSearch).toBeCalledWith(text);
    });
  });

  it('should show value when keypress enter', async () => {
    const onSearch = jest.fn();

    render(<Search onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onSearch).toBeCalledWith(text);
    });
  });
});
