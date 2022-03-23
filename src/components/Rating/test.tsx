import Rating from './index';
import { fireEvent, render, screen, waitFor } from 'utils/tests/helpers';

describe('<Rating />', () => {
  it('should render the Rating', () => {
    const { container } = render(<Rating value={0} />);

    expect(container).toContainHTML('input');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return value when click', async () => {
    const onChange = jest.fn();

    render(<Rating onChange={onChange} />);

    const star = screen.getByText('5 Stars');
    fireEvent.click(star);

    await waitFor(() => {
      expect(onChange).toBeCalledWith(5);
    });
  });
});
