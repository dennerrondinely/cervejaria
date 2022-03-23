import Pagination from './index';
import { fireEvent, render, screen, waitFor } from 'utils/tests/helpers';

describe('<Pagination />', () => {
  it('should render the Pagination', () => {
    const { container } = render(<Pagination pageSize={25} total={50} />);

    expect(container).toContainHTML('1');
    expect(container).toContainHTML('2');
    expect(container).toContainHTML('button');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return value when click in page', async () => {
    const onChange = jest.fn();

    render(<Pagination pageSize={25} total={50} onPaginate={onChange} />);

    const page = screen.getByText('2');
    fireEvent.click(page);

    await waitFor(() => {
      expect(onChange).toBeCalledWith(2);
    });
  });

  it('should return value when click in next', async () => {
    const onChange = jest.fn();

    render(<Pagination pageSize={25} total={50} onPaginate={onChange} />);

    const next = screen.getByTitle('next');
    fireEvent.click(next);

    await waitFor(() => {
      expect(onChange).toBeCalledWith(2);
    });
  });

  it('should return value when click in previous', async () => {
    const onChange = jest.fn();

    render(<Pagination pageSize={25} total={50} onPaginate={onChange} />);

    const previous = screen.getByTitle('previous');
    const next = screen.getByTitle('next');

    fireEvent.click(next);
    fireEvent.click(previous);

    await waitFor(() => {
      expect(onChange).toBeCalledWith(1);
    });
  });
});
