import useSubmitForm from "@/hooks/useSubmitForm"
import Input from "../forms/Input"
import { Alert } from "../Alert"


export const MyAccountForm = () => {

  const initialFormData = {
    name :'',
    email: '',
    phone: '', 
    avatar: '',
    password: '',  
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
        <Input
          type="text"
          name="name"
          label="Nombre y Apellido"
          typeLabel="float"
          placeholder="John Doe"
          onChange={handleChange}
        />
        <Input
          type="url"
          name="avatar"
          label="Foto de perfil"
          typeLabel="float"
          placeholder="http://example.com"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          label="Correo electrónico"
          typeLabel="float"
          placeholder="john@doe.com"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="confirmEmail"
          label="Confirmar Correo electrónico"
          typeLabel="float"
          placeholder="john@doe.com"
          onChange={handleChange}
        />
        <Input
          type="phone"
          name="phone"
          label="Teléfono"
          typeLabel="float"
          placeholder="Sin espacios"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="username"
          label="Usuario"
          typeLabel="float"
          placeholder="johndoe"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Contraseña"
          typeLabel="float"
          placeholder="******"
          onChange={() => {
            handleChange;
          }}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirmar contraseña"
          typeLabel="float"
          placeholder="****"
          onChange={() => {
            handleChange;
          }}
        />
      </div>
      <div className="mr-auto">
        {/* <Button
          variant="info"
          label="Guardar cambios"
          type="submit" /> */}
      </div>
    </form>
  )

}