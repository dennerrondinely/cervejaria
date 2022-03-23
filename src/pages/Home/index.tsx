import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Search from 'components/Search';
import List from 'components/List';
import Message from 'components/Message';
import Container from 'layout/Container';

import api, { BreweryListData } from 'services/api';

import * as S from './styles';

const size = 5;

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [data, setData] = useState<BreweryListData | null>(null);
  const [query, setQuery] = useState({
    searchValue: '',
    pageNo: 1,
    pageSize: size
  });
  const { push } = useHistory();

  const handleFetch = async ({ searchValue, pageNo, pageSize }) => {
    setMessage(null);
    try {
      if (searchValue) {
        const resp = await api.getBreweries({
          pageNo,
          searchValue,
          pageSize
        });
        setData(resp);
        setQuery({ searchValue, pageNo, pageSize });
      } else {
        setMessage('Nenhum termo digitado');
        setData(null);
      }
    } catch (error) {
      setMessage('A lista de cervejaria não foi encontrada');
      setData(null);
    }
  };

  const handlePagination = (pageNo: number) => {
    handleFetch({ ...query, pageNo });
  };

  const handleSearch = (searchValue: string) => {
    handleFetch({ ...query, searchValue });
  };

  const handleRedirect = (id: string) => {
    if (id) push(`detalhes/${id}`);
  };
  return (
    <Container>
      <S.Content>
        <S.Header>
          <Typography variant="h2" fontWeight="bold" mb={5}>
            Bem vindo,
            <br /> Encontre as melhores cervejarias
          </Typography>
          <Search onSearch={handleSearch} />
        </S.Header>
        <S.ListWrapper>
          {!message && data && (
            <List
              breweries={data.breweryList}
              pageSize={size}
              total={data.total}
              onFetchData={handlePagination}
              onClick={handleRedirect}
            />
          )}
          {message && <Message text={message} />}
        </S.ListWrapper>
      </S.Content>
    </Container>
  );
};

export default Home;
