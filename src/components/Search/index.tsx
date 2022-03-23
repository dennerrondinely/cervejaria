import { ChangeEvent, KeyboardEvent, useState } from 'react';

import Icon from 'components/Icon';

import * as S from './styles';

export type SearchProps = {
  onSearch?(text: string): void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;

    setValue(currentTarget.value);
  };
  const handleKeyup = (event: KeyboardEvent<HTMLInputElement>) => {
    const { code, key } = event;
    const canSearch = code === 'Enter' || key === '13';

    if (canSearch && onSearch) onSearch(value);
  };

  const handleClick = () => onSearch && onSearch(value);

  return (
    <S.Wrapper>
      <S.Label>Faça uma busca...</S.Label>
      <S.InputWrapper>
        <S.Button type="button" onClick={handleClick}>
          <Icon icon="search" color="black" size={24} />
        </S.Button>
        <S.Input
          placeholder="Buscar"
          onChange={handleChange}
          onKeyUp={handleKeyup}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default Search;
