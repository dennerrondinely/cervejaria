import ListCard from './index';
import { render, screen } from 'utils/tests/helpers';
import { brewery } from 'mock/breweries';

describe('<ListCard />', () => {
  it('should render the ListCard', () => {
    render(<ListCard brewery={brewery} />);

    const paragraph = screen.getByText(/large/i);
    const rating = screen.getByText(/3.4/i);
    const avatar = screen.getByText('B');
    const title = screen.getByRole('heading', {
      name: /10 Barrel Brewing Co/i
    });

    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });
});
