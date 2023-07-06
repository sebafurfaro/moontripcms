import { Button } from "../Buttons/Button"
import { InputField } from "../forms/InputField"
import useSubmitForm from "@/hooks/useSubmitForm"

export const RegisterCustomerForm = () => {

  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    avatar: '',
    username: '',
    password: ''
  }

  const fields = [
    {
      type: 'text',
      name: 'name',
      label: 'Nombre y apellido *',
      placeholder: 'Ej: John Doe'
    },
    {
      type: 'url',
      name: 'avatar',
      label: 'URL de foto de perfil *',
      placeholder: 'Ej: https://example.com/archivo.jpg'
    },
    {
      type: 'email',
      name: 'email',
      label: 'Correo electrónico *',
      placeholder: 'Ej: john@doe.com'
    },
    {
      type: 'tel',
      name: 'phone',
      label: 'Teléfono *',
      placeholder: 'Ej: 1112345678 (sin espacios)'
    },
    {
      type: 'text',
      name: 'username',
      label: 'Usuario *',
      placerholder: 'En mínusculas, alfanumérico'
    },
    {
      type: 'password',
      name: 'password',
      label: 'Clave *',
      placerholder: '******'
    }

  ]

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/customers',
    '/dashboard/usuarios'
  )

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return(
  <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full mt-5">
    <div className="grid grid-cols-2 items-center gap-x-4 gap-y-6">
      {fields.map((field) => (
        <InputField
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          label={field.label}
          isRequired={true}
          onChange={handleChange}
        />
        ))}
    </div>
    <div className="mr-auto">
      <Button variant="info" label="Guardar" type="submit"/>
    </div>
  </form>
  )
}