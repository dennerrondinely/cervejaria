import List from './index';
import { fireEvent, render, screen, waitFor } from 'utils/tests/helpers';
import { brewery } from 'mock/breweries';

describe('<List />', () => {
  it('should render the List', () => {
    const { container } = render(
      <List breweries={[brewery]} pageSize={25} total={1} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return value when click in page', async () => {
    const onFetchData = jest.fn();

    render(
      <List
        breweries={[brewery]}
        pageSize={25}
        total={50}
        onFetchData={onFetchData}
      />
    );

    const page = screen.getByText('2');
    fireEvent.click(page);

    await waitFor(() => {
      expect(onFetchData).toBeCalledWith(2);
    });
  });
});
