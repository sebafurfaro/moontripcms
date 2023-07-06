import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export const useFetchPost = (url, urlPath, method, headers) => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fetchData = async (requestData) => {
    setIsLoading(true);

    try {
      const response = await axios({
        url: url,
        method: method,
        headers: headers,
        data: requestData,
      });

      if (response.status === 200) {
        const responseData = response.data;
        setFormData(responseData);
        router.push(urlPath);
      } else {
        setError('Error al crear post');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, error, isLoading, fetchData };
};
