import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/Buttons/Button"
import { InputField } from "@/components/forms/InputField"
import { useRouter } from "next/router"
import { Alerts } from "@/components/Alerts/Alerts"

export const LoginForm = () => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorFetch, setErrorFetch ] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios.post('/api/authentication')
    .then(function (response) {

      console.log(response)
      const data = response

      if (data.username === username && data.password === password) {
        localStorage.setItem('isLoggedIn', 'true')
        router.push('/dashboard')
      }
    })
    .catch(function (error) {
      setErrorFetch('El usuario o la clave son inválidos')
    })
    .finally(function () {
      // siempre sera executado
    });

  }

  return(
    <form className="flex flex-col space-y-5 w-full" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Bienvenido!</h1>
      <h2 className="text-base font-thin">Ingresa los datos de acceso para iniciar sesión</h2>
      {errorFetch && <Alerts severity="danger" content={errorFetch} />}
      <InputField
        type="text"
        name="username"
        placeholder="Usuario"
        isRequired={true}
        autoComplete="false"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={errorFetch ? 'border-red-500': ''}
      />
      <InputField
        type="password"
        name="userPassword"
        placeholder="Clave"
        isRequired={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={errorFetch ? 'border-red-500': ''}
      />
      <Button variant="info" label="Ingresar" type="submit" />
    </form>
  )
}