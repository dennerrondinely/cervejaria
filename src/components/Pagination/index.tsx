import Icon from 'components/Icon';
import { useEffect, useState } from 'react';
import getPagination from 'utils/getPagination';

import * as S from './styles';

type PaginationProps = {
  pageSize: number;
  total: number;
  onPaginate?(page: number): void;
};

const Pagination = ({ pageSize, total, onPaginate }: PaginationProps) => {
  const [pagination, setPaginatio] = useState<number[]>([]);
  const [select, setSelect] = useState(1);
  const pageNumbers = Math.ceil(total / pageSize);

  useEffect(() => {
    const pages = getPagination(2, pageNumbers);
    setPaginatio(pages);
  }, [pageNumbers]);

  const handlePagination = (number) => {
    const pages = getPagination(number, pageNumbers);
    setPaginatio(pages);
    setSelect(number);
    onPaginate && onPaginate(number);
  };

  const handlePrevious = () => {
    const previous = select - 1;
    if (previous >= 1) handlePagination(previous);
  };

  const handleNext = () => {
    const next = select + 1;
    if (next <= pagination[pagination.length - 1]) handlePagination(next);
  };

  return (
    <>
      {pageNumbers > 1 && (
        <S.Wrapper>
          <S.Navigation
            onClick={handlePrevious}
            disabled={select <= 1}
            title="previous"
          >
            <Icon icon="chevron-left" size={23} />
          </S.Navigation>
          <S.PagesWrapper>
            {pagination.map(
              (page, i) =>
                page && (
                  <S.Page
                    key={i}
                    type="button"
                    selected={page === select}
                    onClick={() =>
                      page.toString() !== '...' && handlePagination(page)
                    }
                  >
                    {page}
                  </S.Page>
                )
            )}
          </S.PagesWrapper>
          <S.Navigation
            disabled={select >= pagination[pagination.length - 1]}
            onClick={handleNext}
            title="next"
          >
            <Icon icon="chevron-right" size={23} />
          </S.Navigation>
        </S.Wrapper>
      )}
    </>
  );
};

export default Pagination;
