import { useState } from 'react';
import axios from 'axios';
import { useSweetAlert } from './useSweetAlert';

const useSubmitForm = (initialFormData, urlAPI, urlPath) => {
  const [formData, setFormData] = useState(initialFormData);
  const showAlert = useSweetAlert()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(urlAPI, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        showAlert(
          '',
          'Se ha creado de forma exitosa',
          'success',
          urlPath
        )
      } else {
        console.error('Failed to insert data to MongoDB');
        showAlert(
          'Error!',
          'Ha ocurrido un error en el submit',
          'error'
        )
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { formData, setFormData, handleSubmit };
};

export default useSubmitForm;
