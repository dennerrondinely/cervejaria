import Avatar from './index';
import { render, screen } from 'utils/tests/helpers';

describe('<Avatar />', () => {
  it('should render the Avatar', () => {
    const { container } = render(<Avatar name="10 Barrel Brewing Co" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the Avatar withou name', () => {
    render(<Avatar />);
    const defaulyValue = screen.getByText(/-/i);
    expect(defaulyValue).toBeInTheDocument();
  });
});
