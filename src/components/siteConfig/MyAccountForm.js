import useSubmitForm from "@/hooks/useSubmitForm"
import { InputField } from "../forms/InputField"
import { Button } from "../Buttons/Button"

export const MyAccountForm = () => {
  
  const fields = [
    {
      type: 'text',
      name: 'name',
      label: 'Nombre y Apellido',
      placeholder: 'Ej: John Doe',
    },
    {
      type: 'url',
      name: 'avatar',
      label: 'Su avatar',
      placeholder: 'Ej: https://example.com/avatar.jpg',
    },
    {
      type: 'email',
      name: 'email',
      label: 'Correo electrónico',
      placeholder: 'Ej: john@doe.com',
    },
    {
      type: 'email',
      name: 'confirmEmail',
      label: 'Confirme su Correo Electrónico',
      placeholder: 'Ej: john@doe.com',
    },
    {
      type: 'tel',
      name: 'phone',
      label: 'Teléfono',
      placeholder: 'Ej: 1112345678 (sin espacios)',
    },
    {
      type: 'text',
      name: 'username',
      label: 'Usuario',
      placeholder: 'Ej: johndoe'
    },
    {
      type: 'password',
      name: 'password',
      label: 'Contraseña',
      placeholder: 'Ej: ******',
    },
    {
      type: 'confirmPassword',
      name: 'confirmPassword',
      label: 'Confirme su contraseña',
      placeholder: 'Ej: ******',
    }
  ]

  const initialFormData = {
    name :'',
    email: '',
    confirmEmail: '',
    phone: '', 
    avatar: '',
    password: '', 
    confirmPassword: '', 
    username: ''
  }

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/myaccount'
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <h2 className="font-semibold text-base">Mis Datos</h2>
      <div className="grid grid-cols-2 items-center gap-x-4 gap-y-6">
        {fields.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            isRequired={true}
            placeholder={field.placeholder}
            label={field.label}
            autoComplete={false}
            onChange={handleChange}/>
        ))}
      </div>
      <div className="mr-auto">
        <Button
          variant="info"
          label="Guardar cambios"
          type="submit" />
      </div>
    </form>
  )

}