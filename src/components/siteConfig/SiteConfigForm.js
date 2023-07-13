import { InputField } from '../forms/InputField';
import useSubmitForm from '@/hooks/useSubmitForm';

const SiteConfigForm = () => {
  
  const fields = [
    {
      type: 'text',
      name: 'brand',
      placeholder: 'Nombre del sitio',
      label: 'Nombre del sitio *'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Ej: john@doe.com',
      label: 'Correo electrónico *'
    },
    {
      type: 'tel',
      name: 'phone',
      placeholder: 'Ej: 1112345678 (sin espacios)',
      label: 'Teléfono *'
    },
    {
      type: 'text',
      name: 'address',
      placeholder: 'Ej: Av. 9 de Julio 2023, Piso/Depto',
      label: 'Dirección *'
    },
    {
      type: 'text',
      name: 'city',
      placeholder: 'Ej: Arrecfies, Buenos Aires',
      label: 'Ciudad *'
    },
    {
      type: 'text',
      name: 'country',
      placeholder: 'Ej: Argentina',
      label: ''
    },
    {
      type: 'number',
      name: 'postalCode',
      placeholder: 'Ej: 2740 o B2740BSS',
      label: 'Código Postal *'
    }
  ]

  const initialFormData = {
    brand: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  };

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData, 
    '/api/site_config'
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <h2 className="font-semibold text-base">Configuración de sitio</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {fields.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            isRequired={true}
            placeholder={field.placeholder}
            label={field.label}
            onChange={handleChange}/>
        ))}
      </div>
      <div className="mr-auto">
        {/* <Button
          variant="info"
          label="Guardar cambios"
          type="submit" /> */}
      </div>
    </form>
  );
};

export default SiteConfigForm;
