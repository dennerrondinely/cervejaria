import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import RateError from '../components/RateError';
import Rate from '../components/Rate';
import RateSucess from '../components/RateSucess';

type ModalRateProps = {
  submitEvaluation?(email: string, avaluation: number): void;
  status: number;
  resetStatus: () => void;
  name: string;
};
const ModalRate = ({
  submitEvaluation,
  status,
  resetStatus,
  name
}: ModalRateProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    resetStatus();
  };

  const renderBodyModal = () => {
    if (status === 0)
      return (
        <Rate
          submitEvaluation={submitEvaluation}
          handleClose={handleClose}
          name={name}
        />
      );
    if (status === 200) return <RateSucess handleClose={handleClose} />;
    return <RateError handleClose={handleClose} />;
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        {renderBodyModal()}
      </Modal>
    </div>
  );
};

export default ModalRate;
