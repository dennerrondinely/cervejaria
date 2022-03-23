import ListCard from 'components/ListCard';
import Pagination from 'components/Pagination';
import { Brewery } from 'types/brewery';
import * as S from './styles';

export type ListProps = {
  breweries: Brewery[];
  pageSize: number;
  total: number;
  onFetchData?(page: number): void;
  onClick?(id: string): void;
};

const List = ({
  breweries,
  pageSize,
  total,
  onFetchData,
  onClick
}: ListProps) => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>Segundo a opinião dos usuários:</S.Title>
        <S.Subtitle>
          Exibindo {total < pageSize ? total : pageSize} de {total} resultados.
        </S.Subtitle>
      </S.TextWrapper>
      <S.ListWrapper>
        {breweries.map((brewery) => (
          <S.ListItem key={brewery.id}>
            <button
              type="button"
              onClick={() => onClick && onClick(brewery.id)}
            >
              <ListCard brewery={brewery} />
            </button>
          </S.ListItem>
        ))}
      </S.ListWrapper>
      <S.PaginationWrapper>
        <Pagination
          pageSize={pageSize}
          total={total}
          onPaginate={onFetchData}
        />
      </S.PaginationWrapper>
    </S.Wrapper>
  );
};

export default List;
