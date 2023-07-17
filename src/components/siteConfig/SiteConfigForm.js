import useSubmitForm from '@/hooks/useSubmitForm';
import Input from '../forms/Input';
import Button from '../button';

const SiteConfigForm = () => {

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
        <Input
          type="text"
          name="brand"
          label="Nombre del sitio"
          typeLabel="float"
          placeholder="Ej: Moontrip"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          label="Correo electrónico"
          typeLabel="float"
          placeholder="Ej: john@doe.com"
          onChange={handleChange}
        />
        <Input
          type="phone"
          name="phone"
          label="Teléfono"
          typeLabel="float"
          placeholder="Ej: 1122334455"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          label="Dirección"
          typeLabel="float"
          placeholder="Ej: Av. 9 de Julio 2023, Piso/Depto"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="city"
          label="Ciudad"
          typeLabel="float"
          placeholder="Ej: Arrecifes, Buenos Aires"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="country"
          label="País"
          typeLabel="float"
          placeholder="Ej: Argentina"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="postalCode"
          label="Código Postal"
          typeLabel="float"
          placeholder="Ej: 2740 o B2740BSS"
          onChange={handleChange}
        />
      </div>
      <div className="mr-auto">
        <Button
          variant="info"
          label="Guardar cambios"
          type="submit" />
      </div>
    </form>
  );
};

export default SiteConfigForm;
