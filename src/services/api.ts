import { apiUrl } from 'env';
import { Brewery } from 'types/brewery';
import { http } from './http';

export type BreweryRatingInput = {
  brewery: string;
  email: string;
  rating: number;
};

export type BreweryListData = {
  breweryList: Brewery[];
  total: number;
};

const defaultConfig = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
};

const api = {
  getBreweries: (queryString = { pageNo: 1, pageSize: 10, searchValue: '' }) =>
    http<BreweryListData>(
      `${apiUrl}/brewery?pageNo=${queryString.pageNo}&pageSize=${queryString.pageSize}&searchValue=${queryString.searchValue}`,
      {
        ...defaultConfig
      }
    ),
  getBreweryById: (id: string) =>
    http<Brewery>(`${apiUrl}/brewery/${id}`, {
      ...defaultConfig
    }),
  saveBreweryRating: (data: BreweryRatingInput) =>
    http(`${apiUrl}/brewery`, {
      ...defaultConfig,
      method: 'POST',
      body: JSON.stringify(data)
    })
};

export default api;
