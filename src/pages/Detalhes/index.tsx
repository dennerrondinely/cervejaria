/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import Header from '../Home/Header';
import Typography from '@mui/material/Typography';
import DetailsCard from 'components/DetailsCard';
import ModalRate from 'pages/Detalhes/ModalRate';
import { useParams } from 'react-router-dom';
import api, { BreweryRatingInput } from 'services/api';
import { Brewery } from 'types/brewery';
import * as A from './styles';

const DetalhesCervejaria = () => {
  const [status, setStatus] = useState(0);
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const { id } = useParams<{ id: string }>();

  const submitEvaluation = (email: string, avaluation: number) => {
    console.log(email, avaluation);
    setStatus(500);
    console.log(status);
  };
  const resetStatus = () => setStatus(0);

  const loadBreweryDetails = async (breweryId: string) => {
    try {
      const resp = await api.getBreweryById(breweryId);
      setBrewery(resp);
    } catch (error) {
      // do
    }
  };

  const handleSaveBreweryRating = async (
    breweryRatingInput: BreweryRatingInput
  ) => {
    await api.saveBreweryRating(breweryRatingInput);
  };

  useEffect(() => {
    if (id) loadBreweryDetails(id);
  }, [id]);

  return (
    <A.Wrapper>
      <Header />
      <A.Content>
        <Typography variant="h2" fontWeight="bold" mb={5}>
          Detalhes da cervejaria
        </Typography>
        <DetailsCard />
      </A.Content>
    </A.Wrapper>
  );
};

export default DetalhesCervejaria;
