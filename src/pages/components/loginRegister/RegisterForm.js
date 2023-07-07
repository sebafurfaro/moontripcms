import { Button } from "@/components/Buttons/Button"
import { InputField } from "@/components/forms/InputField"
import { Alerts } from "@/components/Alerts/Alerts"
import useSubmitForm from "@/hooks/useSubmitForm"

export const RegisterForm = () => {

  const initialFormData = {
    name: '',
    email: '',
    username: '',
    password: ''
  }

  const fields = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Nombre y apellido *'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Correo electrónico *'
    },
    {
      type: 'text',
      name: 'username',
      placeholder: 'Usuario *'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Contraseña *'
    }
  ]

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/authentication',
    '/login'
  )

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return(
    <form className="w-full flex flex-col space-y-5" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Bienvenido!</h1>
      <h2 className="text-base font-thin">Ingresa los datos para registrar usuario</h2>
      {fields.map((field) => (
        <InputField
        key={field.name}
        type={field.type}
        placeholder={field.placeholder}
        onChange={handleChange} />
      ))}
      <Button variant="info" label="Registrar usuario" type="submit" />
    </form>
  )
}