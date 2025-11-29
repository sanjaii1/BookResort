import { useState } from 'react';
import api from '../api/axios';

const useCreateBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createBooking = async (bookingData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await api.post('/bookings', bookingData);
      setSuccess(true);
      return response.data;
    } catch (err) {
      console.error('Error creating booking:', err);
      setError(err.response?.data?.message || 'Failed to create booking. Please try again.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return { createBooking, loading, error, success, resetStatus };
};

export default useCreateBooking;
