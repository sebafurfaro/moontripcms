import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/Buttons/Button"
import { InputField } from "@/components/forms/InputField"
import { useRouter } from "next/router"
import { Alerts } from "@/components/Alerts/Alerts"

async function authenticate(username, password) {
  try {
    const response = await axios.post('/api/authentication', {
      username,
      password
    })
    if (response.status === 200) {
      return response.data.message
    } else {
      throw new Error(response.data.error)
    }
  } catch (error) {
    console.error('Error during authentication', error)
    throw new Error('Las credenciales son inválidas')
  }
}

export const LoginForm = () => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorFetch, setErrorFetch ] = useState('')
  const router = useRouter()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await authenticate(username, password)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username',username)
      router.push('/dashboard')
    } catch (error) {
      setErrorFetch(error.message)
    }
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
        onChange={handleUsernameChange}
        className={errorFetch ? 'border-red-500': ''}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Clave"
        isRequired={true}
        value={password}
        onChange={handlePasswordChange}
        className={errorFetch ? 'border-red-500': ''}
      />
      <Button variant="info" label="Ingresar" type="submit" />
    </form>
  )
}