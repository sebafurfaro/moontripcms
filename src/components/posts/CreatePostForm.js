import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useSubmitForm from '@/hooks/useSubmitForm';
import Input from '../forms/Input';
import Button from '../button';
import { useEffect, useState } from 'react';

export const CreatePostForm = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  const initialFormData = {
    title: '',
    summary: '',
    resume: '',
    urlImage: '',
    status: 'pending',
    updatedAt: formattedDate,
  };

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/posts',
    '/dashboard/entradas'
  );

  const [quillContent, setQuillContent] = useState('');

  const handleRegularInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuillChange = (value) => {
    setQuillContent(value);
    setFormData({ ...formData, resume: value }); // Update the 'resume' field in formData
  };

  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 mt-10 w-full">
      <div className="flex items-center space-x-3 justify-between">
        <Input
          type="text"
          name="title"
          label="Título de la nota"
          typeLabel="float"
          onChange={handleRegularInputChange}
        />
        <Input
          type="url"
          name="urlImage"
          label="URL de la imagen"
          typeLabel="float"
          onChange={handleRegularInputChange}
        />
      </div>
      <Input
        type="textarea"
        name="summary"
        cols={3}
        rows={5}
        label="Síntesis"
        typeLabel="float"
        placeholder="Ingrese la síntesis de la nota"
        isRequired={true}
        onChange={handleRegularInputChange}
      />
      <ReactQuill
        value={quillContent}
        onChange={handleQuillChange}
      />
      <div className="mr-auto">
        <Button variant="info" label="Crear" type="submit" />
      </div>
    </form>
  );
};
